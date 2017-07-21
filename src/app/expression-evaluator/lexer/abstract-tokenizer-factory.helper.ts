import {TokenType} from "../common/token-type.helper";
import {Lexer, LexerFactory} from "typed-lexer";
import {AbstractTokenAdder} from "./token-adders/abstract-token-adder.helper";
import {CommonTokenAdder} from "./token-adders/common-token-adder.helper";
import {Tokenizer} from "./token-adders/tokenizer.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */

export abstract class AbstractTokenizerFactory {
  protected factory: LexerFactory<TokenType, void>;

  constructor(){
    this.factory = new LexerFactory<TokenType, void>();

    this.addTokenAdder(new CommonTokenAdder());
    }

    addTokenAdder(tokenAdder: AbstractTokenAdder){
      tokenAdder.addTokens(this.factory);
    }

    getLexerForString(input:string):Tokenizer{
      return new Tokenizer(this.factory.getLexerFor(input).readAllWithStr());
    }

    addFinalRule(){
      this.factory.addSimpleRule(/./, TokenType.INVALID);
    }
  }

