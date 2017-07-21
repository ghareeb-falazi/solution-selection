import {TerminalExpression} from "../terminal-expression.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */
export class NumLiteral extends TerminalExpression{
  constructor(num:number){
    super(num);
  }
}
