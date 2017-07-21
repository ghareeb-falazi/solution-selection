import { LexerFactory} from "typed-lexer";
import {TokenType} from "../../common/token-type.helper";
import {AbstractTokenAdder} from "./abstract-token-adder.helper";


export class ArithmeticTokenAdder extends AbstractTokenAdder {
  addTokens(factory:LexerFactory<TokenType, void>):void {

    factory.addSimpleRule(/(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?/, TokenType.NUM_LITERAL);// https://stackoverflow.com/a/4247184
    factory.addSimpleRule("+", TokenType.PLUS);
    factory.addSimpleRule("-", TokenType.MINUS);
    factory.addSimpleRule("*", TokenType.MULTIPLICATION);
    factory.addSimpleRule("/", TokenType.DIV);
    factory.addSimpleRule("%", TokenType.MOD);
  }
}


