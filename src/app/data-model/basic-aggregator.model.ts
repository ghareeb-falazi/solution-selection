
import {AbstractAggregatorModel} from "./abstract-aggregator.model";

export class BasicAggregatorModel extends AbstractAggregatorModel {
  concreteSolution1URI:string;
  concreteSolution2URI: string;

  constructor(concreteSolution1URI:string, concreteSolution2URI: string, aggregatorURI:string){
    super(aggregatorURI);
    this.concreteSolution1URI = concreteSolution1URI;
    this.concreteSolution2URI = concreteSolution2URI;
  }

  static fromData(data:BasicAggregatorModel):BasicAggregatorModel {
    return new BasicAggregatorModel(data.concreteSolution1URI, data.concreteSolution2URI, data.aggregatorUri);
  }
}
