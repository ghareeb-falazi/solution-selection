import {LabelModel} from "./label.model";
/***
 * A simple form of boolean arithmeticExpression that describes the existence of a certain LabelModel
 */
export class BooleanExpressionModel{
  expression: LabelModel;

  constructor(expression: LabelModel){
    this.expression = expression;
  }

  static fromData(data:BooleanExpressionModel):BooleanExpressionModel{
    return new BooleanExpressionModel(LabelModel.fromData(data.expression));
  }
}
