
export class Aggregator{
  concreteSolution1URI:string;
  concreteSolution2URI: string;
  aggregatorURI:string;

  constructor(concreteSolution1URI:string, concreteSolution2URI: string, aggregatorURI:string){
    this.concreteSolution1URI = concreteSolution1URI;
    this.concreteSolution2URI = concreteSolution2URI;
    this.aggregatorURI = aggregatorURI;
  }

  static fromData(data:Aggregator):Aggregator {
    return new Aggregator(data.concreteSolution1URI, data.concreteSolution2URI, data.aggregatorURI);
  }
}
