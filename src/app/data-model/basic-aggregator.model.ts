
import {AbstractAggregatorModel} from "./abstract-aggregator.model";

/**
 * A simple concrete implementation of an aggregator. Supported concrete solutions are saved as string values.
 */
export class BasicAggregatorModel extends AbstractAggregatorModel {
  concreteSolution1Uri:string;
  concreteSolution2Uri: string;

  constructor(concreteSolution1Uri:string, concreteSolution2URI: string, aggregatorURI:string){
    super(aggregatorURI);
    this.concreteSolution1Uri = concreteSolution1Uri;
    this.concreteSolution2Uri = concreteSolution2URI;
  }

  /**
   * Checks whether this aggregator can aggregate the given concrete solutions
   * @param {string} csUri1 one of the concrete solutions to check for aggregability
   * @param {string} csUri2 one of the concrete solutions to check for aggregability
   * @returns {boolean} true if the aggregator can aggregate the two given concrete solutions
   */
  canAggregate(csUri1:string ,csUri2:string):boolean{
    return (this.concreteSolution1Uri.toLowerCase() === csUri1.toLowerCase() &&
      this.concreteSolution2Uri.toLowerCase() === csUri2.toLowerCase());

  }

  /**
   * Parses a JSON-deserialized aggregator
   * @param {BasicAggregatorModel} data JSON-deserialized object
   * @returns {BasicAggregatorModel} a parsed concrete implementation of the given JSON-deserialized object
   */
  static fromData(data:BasicAggregatorModel):BasicAggregatorModel {
    return new BasicAggregatorModel(data.concreteSolution1Uri, data.concreteSolution2Uri, data.aggregatorUri);
  }
}
