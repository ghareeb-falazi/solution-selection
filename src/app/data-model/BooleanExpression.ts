import {Label} from "./Label";
/***
 * A simple form of boolean expression that describes the existence of a certain Label
 */
export class BooleanExpression{
  expression: Label;

  constructor(expression: Label){
    this.expression = expression;
  }

  static fromData(data:BooleanExpression):BooleanExpression{
    return new BooleanExpression(Label.fromData(data.expression));
  }
}
