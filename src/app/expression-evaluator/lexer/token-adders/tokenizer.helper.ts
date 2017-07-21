import {TokenType} from "../../common/token-type.helper";
import {TokenWithStr} from "typed-lexer/dist/typed-lexer";
/**
 * Created by falazigb on 21-Jul-17.
 */
export class Tokenizer {
  private position: number;

  constructor(private tokens: TokenWithStr<TokenType>[]) {
    console.debug(this.tokens);
    this.position = 0;
  }

  next(): TokenWithStr<TokenType> {
    const n: TokenWithStr<TokenType> = this.tokens[this.position++];
    console.debug('next is called');
    return n;
  }

  peek(): TokenWithStr<TokenType> {
    console.debug('peek is called');
    return this.tokens[this.position];
  }
}
