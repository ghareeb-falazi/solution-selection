import {AbstractTokenAdder} from "./abstract-token-adder.helper";
import {LexerFactory} from "typed-lexer";
import {TokenType} from "../../common/token-type.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */

export class StringTokenAdder extends AbstractTokenAdder {
  addTokens(factory: LexerFactory<TokenType, void>): void {
    factory.addSimpleRule(/"[^"]+"/,TokenType.STRING_LITERAL);
  }


}
