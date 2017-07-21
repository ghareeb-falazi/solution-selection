import {Expression} from "./expression.helper";

export abstract class NonTerminalExpression extends Expression{
  public left:Expression;
  public right:Expression;

  setLeft(left:Expression):void{
    this.left = left;
  }

  setRight(right:Expression):void{
    this.right = right;
  }
}
