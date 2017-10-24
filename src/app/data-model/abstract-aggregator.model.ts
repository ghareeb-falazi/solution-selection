
/**
 * An abstract representation of an aggregator (A Uri for the actual aggregating artifact is omitted)
 */
export abstract class AbstractAggregatorModel {

  constructor(public aggregatorUri: string) {
  }

  /**
   * Checks whether this aggregator can aggregate the given concrete solutions
   * @param {string} csUri1 one of the concrete solutions to check for aggregability
   * @param {string} csUri2 one of the concrete solutions to check for aggregability
   * @returns {boolean} true if the aggregator can aggregate the two given concrete solutions
   */
  abstract canAggregate(csUri1: string, csUri2: string): boolean;
}
