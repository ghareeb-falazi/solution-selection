import {BooleanExpression} from "./BooleanExpression";

export class Requirement{
  expression: BooleanExpression;

  constructor(expression:BooleanExpression){
    this.expression = expression;
  }


  static fromData(data: Requirement):Requirement {
    return new Requirement(BooleanExpression.fromData(data.expression));
  }
}
