import {AbstractTokenAdder} from "./abstract-token-adder.helper";
import {LexerFactory} from "typed-lexer";
import {TokenType} from "../../common/token-type.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */


export class BooleanTokenAdder extends AbstractTokenAdder{
  addTokens(factory: LexerFactory<TokenType, void>): void {
    factory.addSimpleRule(/=/, TokenType.EQUAL);
    factory.addSimpleRule(/<>/, TokenType.NOT_EQUAL);
    factory.addSimpleRule(/<=/, TokenType.LESS_OR_EQUAL);
    factory.addSimpleRule(/>=/, TokenType.GREATER_OR_EQUAL);
    factory.addSimpleRule(/</, TokenType.LESS_THAN);
    factory.addSimpleRule(/>/, TokenType.GREATER_THAN);
    factory.addSimpleRule(/and | AND/, TokenType.AND);
    factory.addSimpleRule(/or | OR/, TokenType.OR);
    factory.addSimpleRule(/not | NOT/, TokenType.NOT);
  }


}
