import {NonTerminalExpression} from "../non-terminal-expression.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */

export class Multiply extends NonTerminalExpression{
  evaluate() {
    return this.left.evaluate() * this.right.evaluate();
  }

  toString():string{
    return `${this.left.toString()}*${this.right.toString()}`;
  }
}
