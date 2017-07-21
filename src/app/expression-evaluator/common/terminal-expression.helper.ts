import {Expression} from "./expression.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */

export abstract class TerminalExpression extends Expression {

  constructor(private value: any) {
    super();
  }

  evaluate(){
    return this.value;
  }
  toString():string{
    return this.value.toString();
  }
}
