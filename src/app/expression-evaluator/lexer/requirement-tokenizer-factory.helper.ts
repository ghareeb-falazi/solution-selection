import {AbstractTokenizerFactory} from "./abstract-tokenizer-factory.helper";
import {CommonTokenAdder} from "./token-adders/common-token-adder.helper";
import {ArithmeticTokenAdder} from "./token-adders/arithemtic-token-adder.helper";
import {StringTokenAdder} from "./token-adders/string-token-adder.helper";
import {BooleanTokenAdder} from "./token-adders/boolean-token-adder.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */


export class RequirementTokenizerFactory extends AbstractTokenizerFactory{
  constructor(){
    super();

    this.addTokenAdder(new ArithmeticTokenAdder());
    this.addTokenAdder(new StringTokenAdder());
    this.addTokenAdder(new BooleanTokenAdder());
    this.addFinalRule();
  }
}
