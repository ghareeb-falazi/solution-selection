import {AbstractAggregatorModel} from './abstract-aggregator.model';
import {BasicAggregatorModel} from './basic-aggregator.model';
/**
 * A factory for creating the appropriate aggregator implementation
 */
export class AggregatorCreatorModel {
  /**
   * Creates a concrete aggregator implementation based on a JSON-deserialized object.
   * @param {AbstractAggregatorModel} original The JSON-deserialized object to convert into a concrete aggregator
   * @returns {AbstractAggregatorModel} A concrete aggregator based on the given JSON-deserialized object
   */
  createNewInstance(original: AbstractAggregatorModel): AbstractAggregatorModel {
    return BasicAggregatorModel.fromData(original as BasicAggregatorModel);
  }
}
