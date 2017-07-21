import {NonTerminalExpression} from "../non-terminal-expression.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */
export  class UnaryPlus extends  NonTerminalExpression{
  evaluate() {
    return this.left.evaluate();
  }
  toString():string{
    return `+${this.left.toString()}`;
  }

}
