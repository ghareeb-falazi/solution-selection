
import {AbstractAggregatorModel} from "./abstract-aggregator.model";

export class BasicAggregatorModel extends AbstractAggregatorModel {
  concreteSolution1Uri:string;
  concreteSolution2Uri: string;

  constructor(concreteSolution1Uri:string, concreteSolution2URI: string, aggregatorURI:string){
    super(aggregatorURI);
    this.concreteSolution1Uri = concreteSolution1Uri;
    this.concreteSolution2Uri = concreteSolution2URI;
  }

  static fromData(data:BasicAggregatorModel):BasicAggregatorModel {
    return new BasicAggregatorModel(data.concreteSolution1Uri, data.concreteSolution2Uri, data.aggregatorUri);
  }
}
