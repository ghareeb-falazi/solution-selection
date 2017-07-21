/**
 * Created by falazigb on 21-Jul-17.
 */
import {AbstractTokenAdder} from "./abstract-token-adder.helper";
import {LexerFactory} from "typed-lexer";
import {TokenType} from "../../common/token-type.helper";

export class CommonTokenAdder extends AbstractTokenAdder{
  addTokens(factory: LexerFactory<TokenType, void>): void {
    factory.addSimpleRule(/[_a-zA-Z][_a-zA-Z0-9]*/, TokenType.ID);
    factory.addSimpleRule("(", TokenType.START_PARENTHESIS);
    factory.addSimpleRule(")", TokenType.END_PARENTHESIS);
    factory.addRule(/\s+/, function ():boolean {return true;});//Skips whitespaces!

  }

}
