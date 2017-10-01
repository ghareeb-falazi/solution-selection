import {AbstractAggregatorModel} from "./abstract-aggregator.model";
import {BasicAggregatorModel} from "./basic-aggregator.model";
/**
 * Created by falazigb on 13-Jul-17.
 */
export class AggregatorCreatorModel{
  createNewInstance(original:AbstractAggregatorModel):AbstractAggregatorModel{
    return BasicAggregatorModel.fromData(original as BasicAggregatorModel);
  }
}
