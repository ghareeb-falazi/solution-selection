import {AbstractAggregator} from "./AbstractAggregator";
import {ConcreteSolution} from "./ConcreteSolution";
/**
 * Created by falazigb on 14-Jul-17.
 */

export class SolutionPathStep{
  constructor(public aggregators:AbstractAggregator[], public concreteSolution:ConcreteSolution){
  }

  toString():string{
    let result:string = "->(";

    for(let i = 0; i < this.aggregators.length; i++){
      result += this.aggregators[i].aggregatorUri;

      if(i < this.aggregators.length - 1)
        result += ", ";
    }

    result += `)->${this.concreteSolution.uri}`;

    return result;
  }


}
