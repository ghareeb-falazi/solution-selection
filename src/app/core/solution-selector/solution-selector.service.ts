import {BooleanExpressionModel} from '../../data-model/boolean-expression.model';
import {ConcreteSolutionPathModel} from '../../data-model/concrete-solution-path.model';
import {ExpressionEvaluatorService} from '../expression-evaluation/expression-evaluator.service';
import {ConcreteSolutionRepositoryService} from '../concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from '../aggregator-repository/aggregator-repository.service';
import {ConcreteSolutionModel} from '../../data-model/concrete-solution.model';
import {AbstractAggregatorModel} from '../../data-model/abstract-aggregator.model';
import {ConcreteSolutionPathStepModel} from 'app/data-model/concrete-solution-path-step.model';
import {Injectable} from '@angular/core';
import {ContextModel} from '../../data-model/context.model';
import {CapabilityModel} from '../../data-model/capability.model';
import {UserQueryModel} from '../../data-model/user-query.model';

/**
 * A service that implements the mapping algorithm
 */
@Injectable()
export class SolutionSelectorService {

  /**
   * Filters a set of potentially valid concrete solution paths based on the user inputs
   * @param {ConcreteSolutionPathModel[]} solutionPaths a set of potentially valid concrete solution paths resulting
   * from phase 1
   * @param {CapabilityModel[]} initialProperties user-provided set of initial properties
   * @param {UserQueryModel} userQuery user-provided query
   * @returns {ConcreteSolutionPathModel[]}
   */
  private static phase2(solutionPaths: ConcreteSolutionPathModel[], initialProperties: CapabilityModel[],
                        userQuery: UserQueryModel): ConcreteSolutionPathModel[] {
    console.debug('Phase 2');
    console.debug('*******');
    const result: ConcreteSolutionPathModel[] = [];

    for (const path of solutionPaths) {
      console.debug(`** Solution Path: ${path.toString()} **`);

      const context: ContextModel = new ContextModel(initialProperties, path);
      const solutions: ConcreteSolutionModel[] = path.getAllConcreteSolutions();
      let isFound = true;

      if (ExpressionEvaluatorService.isUserQueryFulfilled(userQuery, context)) {// does the context
        // fulfill the user query?
        console.debug('UQ fulfilled');
        for (const solution of solutions) {// does the context fulfill all requirements?
          for (const requirement of solution.requirements) {
            if (!ExpressionEvaluatorService.isRequirementFulfilled(requirement, solution.uri, context)) {
              console.debug(`Requirement "${requirement.expression}" is not fulfilled!`);
              isFound = false;
              break;
            }
          }

          if (!isFound) {
            break;
          }
        }
      } else {
        console.debug('UQ is not fulfilled!');
        isFound = false;
      }

      if (isFound) {
        console.debug('All requirements are fulfilled\nPath is valid!');
        result.push(path);
      }
    }

    return result;
  }

  /**
   * Initializes a new instance of the service
   * @param {ConcreteSolutionRepositoryService} concreteSolutionRepository
   * @param {AggregatorRepositoryService} aggregatorsRepository
   */
  constructor(private concreteSolutionRepository: ConcreteSolutionRepositoryService,
              private aggregatorsRepository: AggregatorRepositoryService) {

  }


  /**
   * Executes the mapping algorithm
   * @param {string[]} patternPath the sequence of patterns
   * @param {CapabilityModel[]} initialProperties the user-provided set of initial properties
   * @param {BooleanExpressionModel} userQuery the user-provided query
   * @returns {ConcreteSolutionPathModel[]} set of valid concrete solution maps that map to the given solution path
   */
  selectConcreteSolutions(patternPath: string[], initialProperties: CapabilityModel[],
                          userQuery: BooleanExpressionModel): ConcreteSolutionPathModel[] {
    const phase1CSPaths: ConcreteSolutionPathModel[] = this.phase1(patternPath);

    return SolutionSelectorService.phase2(phase1CSPaths, initialProperties, userQuery);
  }

  /**
   * Gets the set of concrete solutions that come after a given one based on the input solution path and the available
   * aggregators.
   * @param {ConcreteSolutionModel} currentSolution the 'current' concrete solution
   * @param {string} nextPatternUri the name of the pattern that comes next in the solution path
   * @returns {ConcreteSolutionPathStepModel[]} the set of concrete solutions that come 'next'
   */
  private getNextPathSteps(currentSolution: ConcreteSolutionModel, nextPatternUri: string): ConcreteSolutionPathStepModel[] {
    const allNextSols: ConcreteSolutionModel[] = this.concreteSolutionRepository.getConcreteSolutionsOfPattern(nextPatternUri);
    const result: ConcreteSolutionPathStepModel[] = [];
    let aggregators: AbstractAggregatorModel[] = null;

    if (currentSolution) {// current solution is provided so we are not looking for the starting myNodes
      for (let i = 0; i < allNextSols.length; i++) {
        aggregators = this.aggregatorsRepository.getSuitableAggregators(currentSolution.uri, allNextSols[i].uri);

        if (aggregators.length > 0) {
          result.push(new ConcreteSolutionPathStepModel(aggregators, allNextSols[i]));
        }
      }
    } else {// current solution is not provided, so we are looking for the starting myNodes
      for (const solution of allNextSols) {
        result.push(new ConcreteSolutionPathStepModel([], solution));
      }
    }

    return result;
  }

  /**
   * Recursively traverses the set of concrete solutions looking for paths that implement a given solution path
   * @param {ConcreteSolutionPathStepModel} currentStep the current step reached in the traversal
   * @param {string[]} patterPath the sequence of patterns
   * @param {number} currentPosition the current 0-based position reached in the current path being constructed
   * @param {ConcreteSolutionPathModel} path the current concrete solution path being constructed
   * @param {ConcreteSolutionPathModel[]} completePaths a set of all concrete solution paths that implement the given
   * solution path.
   */
  private depthFirstTraversal(currentStep: ConcreteSolutionPathStepModel, patterPath: string[],
                              currentPosition: number, path: ConcreteSolutionPathModel
    , completePaths: ConcreteSolutionPathModel[]) {

    path.pushPathStep(currentStep);
    if (currentPosition >= patterPath.length - 1) {// We have reached the end!
      completePaths.push(path.copy());
    } else {
      const nextSteps: ConcreteSolutionPathStepModel[] =
        this.getNextPathSteps(currentStep.concreteSolution, patterPath[currentPosition + 1]);

      for (let i = 0; i < nextSteps.length; i++) {
        this.depthFirstTraversal(nextSteps[i], patterPath, currentPosition + 1, path, completePaths);
      }
    }

    path.popPathStep();
  }

  /**
   * Gets the set of all potentially valid concrete solution paths that implement a given solution path
   * @param {string[]} patternPath
   * @returns {ConcreteSolutionPathModel[]}
   */
  private phase1(patternPath: string[]): ConcreteSolutionPathModel[] {
    const startingNodes: ConcreteSolutionPathStepModel[] = this.getNextPathSteps(null, patternPath[0]);
    const result: ConcreteSolutionPathModel[] = [];

    for (const startingNode of startingNodes) {
      const currentPath: ConcreteSolutionPathModel = new ConcreteSolutionPathModel();
      this.depthFirstTraversal(startingNode, patternPath, 0, currentPath, result);
    }

    return result;
  }

}
