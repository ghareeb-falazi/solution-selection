
import {NonTerminalExpression} from "../non-terminal-expression.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */
export class Sum extends NonTerminalExpression{
  evaluate():number {
    return this.left.evaluate() + this.right.evaluate();
  }

  toString():string{
    return `${this.left.toString()}+${this.right.toString()}`;
  }
}
