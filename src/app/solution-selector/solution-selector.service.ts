import {Label} from "../data-model/Label";
import {BooleanExpression} from "../data-model/BooleanExpression";
import {SolutionPath} from "../data-model/SolutionPath";
import {ExpressionEvaluatorService} from "../expression-evaluator/expression-evaluator.service";
import {ConcreteSolutionRepositoryService} from "../concrete-solution-repository/concrete-solution-repository.service";
import {AggregatorRepositoryService} from "../aggregator-repository/aggregator-repository.service";
import {ConcreteSolution} from "../data-model/ConcreteSolution";
import {AbstractAggregator} from "../data-model/AbstractAggregator";
import {SolutionPathStep} from "app/data-model/SolutionPathStep";
import {Injectable} from "@angular/core";
/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class SolutionSelectorService {
  constructor(private expressionEvaluator:ExpressionEvaluatorService,
              private concreteSolutionRepository:ConcreteSolutionRepositoryService,
              private aggregatorsRepository:AggregatorRepositoryService){

  }

  selectConcreteSolutions(patternPath:string[], initialProperties:Label[], generalConditions:BooleanExpression):SolutionPath[]{
    let phas1SolutionPaths:SolutionPath[] = this.phase1(patternPath);

    return this.phase2(phas1SolutionPaths, initialProperties, generalConditions);
  }

  getNextPathSteps(currentSolution:ConcreteSolution, nextPatternUri:string):SolutionPathStep[]{
    let allNextSols:ConcreteSolution[] = this.concreteSolutionRepository.getConcreteSolutionsOfPattern(nextPatternUri);
    let result: SolutionPathStep[] = [];
    let aggregators:AbstractAggregator[] = null;


    if(currentSolution) {//current solution is provided so we are not looking for the starting nodes
      for (let i = 0; i < allNextSols.length; i++) {
        aggregators = this.aggregatorsRepository.getAggregators(currentSolution.uri, allNextSols[i].uri);

        if (aggregators.length > 0) {
          result.push(new SolutionPathStep(aggregators, allNextSols[i]));
        }
      }
    }
    else //current solution is not provided, so we are looking for the starting nodes
      {
        for(let solution of allNextSols){
          result.push(new SolutionPathStep(null, solution));
        }
      }

    return result;
  }

  depthFirstTraversal(currentStep:SolutionPathStep, patterPath:string[], currentPosition:number, path:SolutionPath
    , completePaths:SolutionPath[]){
    console.debug(currentStep, patterPath, currentPosition, path, completePaths);
    if(currentStep)//otherwise, this is the path start
      path.pushPathStep(currentStep);


    let currentSolution: ConcreteSolution = null;

    if(currentStep)
      currentSolution = currentStep.concreteSolution;
    else
      currentSolution = path.startNode;

    if(currentPosition >= patterPath.length - 1) {//We have reached the end!
      completePaths.push(path.copy());
    }
    else
    {
      let nextSteps:SolutionPathStep[] = this.getNextPathSteps(currentSolution, patterPath[currentPosition + 1]);

      for(let i = 0; i < nextSteps.length; i++){
        this.depthFirstTraversal(nextSteps[i], patterPath, currentPosition + 1, path, completePaths);
      }
    }

    path.popPathStep();
  }

  phase1(patternPath:string[]):SolutionPath[]{
    //console.debug(patternPath);
    let startingNodes:SolutionPathStep[] = this.getNextPathSteps(null, patternPath[0]);
    let result:SolutionPath[] = [];

    for(let startingNode of startingNodes){
      let currentPath:SolutionPath = new SolutionPath(startingNode.concreteSolution);
      this.depthFirstTraversal(null, patternPath, 0, currentPath, result);
    }
    console.debug(result);
    return result;
  }

  phase2(solutionPaths:SolutionPath[], initialProperties:Label[], generalConditions:BooleanExpression):SolutionPath[]{
    return null;
  }
}
