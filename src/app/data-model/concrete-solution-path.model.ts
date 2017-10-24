import {ConcreteSolutionModel} from './concrete-solution.model';
import {ConcreteSolutionPathStepModel} from './concrete-solution-path-step.model';
import {AbstractAggregatorModel} from './abstract-aggregator.model';
import {isNullOrUndefined} from 'util';

/**
 * Created by falazigb on 13-Jul-17.
 */
export class ConcreteSolutionPathModel {
  private path: ConcreteSolutionPathStepModel[] = [];

  /**
   * Initializes a new instance of the ConcreteSolutionPathModel class
   * @param {ConcreteSolutionModel} startNode an optional starting concrete solution.
   */
  constructor(startNode?: ConcreteSolutionModel) {
    // if provided with a starting node, create a step for it with no aggregators 'before'.
    if (!isNullOrUndefined(startNode)) {
      const firstStep: ConcreteSolutionPathStepModel = new ConcreteSolutionPathStepModel([], startNode);
      this.pushPathStep(firstStep);
    }
  }

  /**
   * Pushes a step at the end of the path
   * @param {ConcreteSolutionPathStepModel} step the step to push
   */
  pushPathStep(step: ConcreteSolutionPathStepModel): void {
    this.path.push(step);
  }

  /**
   * Removes a step from the end of the path
   * @returns {any}
   */
  popPathStep(): any {
    return this.path.pop();
  }

  /**
   * Gets a set of all concrete solutions included in the path
   * @returns {ConcreteSolutionModel[]}
   */
  getAllConcreteSolutions(): ConcreteSolutionModel[] {
    const result: ConcreteSolutionModel[] = [];

    for (const pathStep of this.path) {
      result.push(pathStep.concreteSolution);
    }

    return result;
  }

  /**
   * Gets a set of all none-empty sets of aggregators included in the path
   * @returns {AbstractAggregatorModel[][]}
   */
  getAllAggregators(): AbstractAggregatorModel[][] {
    const result: AbstractAggregatorModel[][] = [];

    for (const step of this.path) {
      if (step.aggregators.length > 0) {
        result.push(step.aggregators);
      }
    }

    return result;
  }

  /**
   * Gets the concrete solution that comes before or after the specified one
   * @param {string} solutionUri the uri of the concrete solution to get its neighbor.
   * @param {boolean} isNext if true means we want the concrete solution that comes after the given one.
   * Otherwise, we want the one that comes before it
   * @returns {ConcreteSolutionModel} the concrete solution that comes before or after the specified one,
   * or {null} if such a concrete solution does not exist.
   */
  getNeighbor(solutionUri: string, isNext: boolean): ConcreteSolutionModel {
    let result: ConcreteSolutionModel = null;
    let index = -1;

    // find the index of the given concrete solution.
    for (let i = 0; i < this.path.length; i++) {
      if (solutionUri === this.path[i].concreteSolution.uri) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      if (isNext) {
        if (index < this.path.length - 1) {
          result = this.path[index + 1].concreteSolution; // return next
        }
      } else {
        if (index > 0) {
          return this.path[index - 1].concreteSolution; // return previous
        }
      }
    }

    return result;
  }

  /**
   * Creates a shallow copy of the concrete solution path
   * @returns {ConcreteSolutionPathModel} a shallow copy of the concrete solution path
   */
  copy(): ConcreteSolutionPathModel {
    const result: ConcreteSolutionPathModel = new ConcreteSolutionPathModel();

    for (const step of this.path) {
      result.path.push(step);
    }

    return result;
  }

  /**
   * Returns a string representation of the concrete solution path in the format:
   * "<start_cs_uri>->(<agg_list_1>)-><cs_uri>->..-><end_cs_uri>"
   * @returns {string} a string representation of the concrete solution path in the format:
   * "<start_cs_uri>->(<agg_list_1>)-><cs_uri>->..-><end_cs_uri>"
   */
  toString(): string {
    let result = '';

    for (let i = 0; i < this.path.length; i++) {
      result += this.path[i].toString();
    }

    return result;
  }
}
