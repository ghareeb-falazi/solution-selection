
import {AbstractAggregator} from "./AbstractAggregator";

export class BasicAggregator extends AbstractAggregator {
  concreteSolution1URI:string;
  concreteSolution2URI: string;

  constructor(concreteSolution1URI:string, concreteSolution2URI: string, aggregatorURI:string){
    super(aggregatorURI);
    this.concreteSolution1URI = concreteSolution1URI;
    this.concreteSolution2URI = concreteSolution2URI;
  }

  static fromData(data:BasicAggregator):BasicAggregator {
    return new BasicAggregator(data.concreteSolution1URI, data.concreteSolution2URI, data.aggregatorUri);
  }
}
