import {AbstractAggregatorModel} from './abstract-aggregator.model';
import {ConcreteSolutionModel} from './concrete-solution.model';
import {isNullOrUndefined} from 'util';

/**
 * Represents a single step a concrete solution path.
 * A step includes a concrete solution and the aggregators that come 'before' it.
 */

export class ConcreteSolutionPathStepModel {
  constructor(public aggregators: AbstractAggregatorModel[], public concreteSolution: ConcreteSolutionModel) {
  }

  /**
   * Returns a string representation of the step in the format
   * "->(<list-of-aggregators>)-><concrete-solution-uri>"
   * @returns {string} a string representation of the step in the format
   */
  toString(): string {
    if (isNullOrUndefined(this.aggregators) || this.aggregators.length === 0) {

      return this.concreteSolution.visualName;
    } else {

      let result = '->(';

      for (let i = 0; i < this.aggregators.length; i++) {
        result += this.aggregators[i].aggregatorUri;

        if (i < this.aggregators.length - 1) {
          result += ', ';
        }
      }

      result += `)->${this.concreteSolution.visualName}`;

      return result;
    }
  }


}
