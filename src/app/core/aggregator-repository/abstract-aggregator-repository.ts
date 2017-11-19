import {AbstractAggregatorModel} from '../../data-model/abstract-aggregator.model';

export abstract class AbstractAggregatorRepository {
  /**
   * Gets the set of aggregators that are able to aggregate the two given concrete solutions.
   * @param {string} solution1URI
   * @param {string} solution2URI
   * @returns {AbstractAggregatorModel[]}
   */
  abstract getSuitableAggregators(solution1URI: string, solution2URI: string): AbstractAggregatorModel[];
}
