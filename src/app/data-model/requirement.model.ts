import {BooleanExpressionModel} from "./boolean-expression.model";

/**
 * Represents a requirement of a concrete solution
 */
export class RequirementModel extends BooleanExpressionModel{
  constructor(expression:string){
    super(expression);
  }

  /**
   * Parses a JSON-deserialized requirement
   * @param {RequirementModel} data JSON-deserialized object
   * @returns {RequirementModel} a parsed concrete implementation of the given JSON-deserialized object
   */
  static fromData(data: RequirementModel):RequirementModel {
    return new RequirementModel(data.expression);
  }
}
