
import {BooleanExpressionModel} from "../data-model/boolean-expression.model";
import {SolutionPathModel} from "../data-model/solution-path.model";
import {ExpressionEvaluatorService} from "../expression-evaluator/expression-evaluator.service";
import {ConcreteSolutionRepositoryService} from "../concrete-solution-repository/concrete-solution-repository.service";
import {AggregatorRepositoryService} from "../aggregator-repository/aggregator-repository.service";
import {ConcreteSolutionModel} from "../data-model/concrete-solution.model";
import {AbstractAggregatorModel} from "../data-model/abstract-aggregator.model";
import {SolutionPathStepModel} from "app/data-model/solution-path-step.model";
import {Injectable} from "@angular/core";
import {ContextModel} from "../data-model/context.model";
import {CapabilityModel} from "../data-model/capability.model";
import {GlobalConditionModel} from "../data-model/global-condition.model";



@Injectable()
export class SolutionSelectorService {
  constructor(private concreteSolutionRepository:ConcreteSolutionRepositoryService,
              private aggregatorsRepository:AggregatorRepositoryService){

  }



  selectConcreteSolutions(patternPath:string[], initialCapabilities:CapabilityModel[], generalConditions:BooleanExpressionModel):SolutionPathModel[]{
    let phase1SolutionPaths:SolutionPathModel[] = this.phase1(patternPath);

    return this.phase2(phase1SolutionPaths, initialCapabilities, generalConditions);
    //return phase1SolutionPaths;
  }

  private getNextPathSteps(currentSolution:ConcreteSolutionModel, nextPatternUri:string):SolutionPathStepModel[]{
    let allNextSols:ConcreteSolutionModel[] = this.concreteSolutionRepository.getConcreteSolutionsOfPattern(nextPatternUri);
    let result: SolutionPathStepModel[] = [];
    let aggregators:AbstractAggregatorModel[] = null;


    if(currentSolution) {//current solution is provided so we are not looking for the starting myNodes
      for (let i = 0; i < allNextSols.length; i++) {
        aggregators = this.aggregatorsRepository.getSuitableAggregators(currentSolution.uri, allNextSols[i].uri);

        if (aggregators.length > 0) {
          result.push(new SolutionPathStepModel(aggregators, allNextSols[i]));
        }
      }
    }
    else //current solution is not provided, so we are looking for the starting myNodes
      {
        for(let solution of allNextSols){
          result.push(new SolutionPathStepModel(null, solution));
        }
      }

    return result;
  }

  private depthFirstTraversal(currentStep:SolutionPathStepModel, patterPath:string[], currentPosition:number, path:SolutionPathModel
    , completePaths:SolutionPathModel[]){
    //console.debug(currentStep, patterPath, currentPosition, path, completePaths);
    if(currentStep)//otherwise, this is the path start
      path.pushPathStep(currentStep);


    let currentSolution: ConcreteSolutionModel = null;

    if(currentStep)
      currentSolution = currentStep.concreteSolution;
    else
      currentSolution = path.startNode;

    if(currentPosition >= patterPath.length - 1) {//We have reached the end!
      completePaths.push(path.copy());
    }
    else
    {
      let nextSteps:SolutionPathStepModel[] = this.getNextPathSteps(currentSolution, patterPath[currentPosition + 1]);

      for(let i = 0; i < nextSteps.length; i++){
        this.depthFirstTraversal(nextSteps[i], patterPath, currentPosition + 1, path, completePaths);
      }
    }

    path.popPathStep();
  }

  private phase1(patternPath:string[]):SolutionPathModel[]{
    //console.debug(patternPath);
    const startingNodes:SolutionPathStepModel[] = this.getNextPathSteps(null, patternPath[0]);
    const result:SolutionPathModel[] = [];

    for(let startingNode of startingNodes){
      const currentPath:SolutionPathModel = new SolutionPathModel(startingNode.concreteSolution);
      this.depthFirstTraversal(null, patternPath, 0, currentPath, result);
    }

    return result;
  }

  private phase2(solutionPaths:SolutionPathModel[], initialCapabilities:CapabilityModel[], globalConditions:GlobalConditionModel):SolutionPathModel[]{
    //console.debug(solutionPaths);
    const result:SolutionPathModel[] = [];

    for(const path of solutionPaths){
      console.debug('**Solution path: ');
      console.debug(path.toString());
      const context:ContextModel = new ContextModel(initialCapabilities, path);
      //console.debug(context);
      const solutions:ConcreteSolutionModel[] = path.getAllConcreteSolutions();
      let isFound = true;
      //console.debug(context);
      //console.debug(requirements);
      if(ExpressionEvaluatorService.isGlobalConditionFulfilled(globalConditions, context))//generalConditions, context))//does the context
        // fulfill the general condition?
      {
        console.debug('GC fulfilled');
        for (const solution of solutions) {//does the context fulfill all requirements?
          for (const requirement of solution.requirements) {
            if (!ExpressionEvaluatorService.isRequirementFulfilled(requirement, solution.uri, context)) {
              console.debug(`requirement ${requirement.expression} is not fulfilled`);
              isFound = false;
              break;
            }
          }
        }
      }
      else {
        isFound = false;
      }

      if(isFound){
        result.push(path);
      }
    }

    return result;
  }

}
