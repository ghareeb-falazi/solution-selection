import {TokenType} from "../../common/token-type.helper";
import {LexerFactory} from "typed-lexer";

/**
 * Created by falazigb on 21-Jul-17.
 */
export abstract class AbstractTokenAdder{
  abstract addTokens(factory:LexerFactory<TokenType, void>):void;
}
