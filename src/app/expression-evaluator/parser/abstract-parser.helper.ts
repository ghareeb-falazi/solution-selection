
import {Expression} from "../common/expression.helper";
import {Tokenizer} from "../lexer/token-adders/tokenizer.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */
export abstract class AbstractParser{
  constructor(protected tokenizer:Tokenizer){

  }

  abstract parse(input:string):Expression;
}
