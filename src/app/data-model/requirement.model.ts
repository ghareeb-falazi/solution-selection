import {BooleanExpressionModel} from "./boolean-expression.model";

export class RequirementModel{
  expression: BooleanExpressionModel;

  constructor(expression:BooleanExpressionModel){
    this.expression = expression;
  }


  static fromData(data: RequirementModel):RequirementModel {
    return new RequirementModel(BooleanExpressionModel.fromData(data.expression));
  }
}
