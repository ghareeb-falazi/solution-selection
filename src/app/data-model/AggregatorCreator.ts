import {AbstractAggregator} from "./AbstractAggregator";
import {BasicAggregator} from "./BasicAggregator";
/**
 * Created by falazigb on 13-Jul-17.
 */


export class AggregatorCreator{
  createNewInstance(original:AbstractAggregator):AbstractAggregator{
    return BasicAggregator.fromData(original as BasicAggregator);
  }
}
