import {AbstractAggregatorModel} from "./abstract-aggregator.model";
import {ConcreteSolutionModel} from "./concrete-solution.model";
/**
 * Created by falazigb on 14-Jul-17.
 */

export class SolutionPathStepModel{
  constructor(public aggregators:AbstractAggregatorModel[], public concreteSolution:ConcreteSolutionModel){
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
