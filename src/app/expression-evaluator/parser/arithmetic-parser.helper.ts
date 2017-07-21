import {AbstractParser} from "./abstract-parser.helper";
import {Expression} from "../common/expression.helper";
import {and, Lexer, TokenWithStr} from "typed-lexer";
import {TokenType} from "../common/token-type.helper";
import {NonTerminalExpression} from "../common/non-terminal-expression.helper";
import {Sum} from "../common/arithemtic-expression/sum.helper";
import {Subtract} from "../common/arithemtic-expression/subtract.helper";
import {Mod} from "../common/arithemtic-expression/mod.helper";
import {Divide} from "../common/arithemtic-expression/divide.helper";
import {Multiply} from "../common/arithemtic-expression/multiply.helper";
import {NumLiteral} from "app/expression-evaluator/common/arithemtic-expression/num-literal.helper";
import {Tokenizer} from "../lexer/token-adders/tokenizer.helper";
import {UnaryPlus} from "../common/arithemtic-expression/unary-plus.helper";
import {UnaryMinus} from "../common/arithemtic-expression/unary-minus.helper";
/**
 * Created by falazigb on 21-Jul-17.
 */


export class ArithmeticParser extends AbstractParser {
  private symbol: TokenWithStr<TokenType>;
  private root: Expression;

  constructor(lexer: Tokenizer) {
    super(lexer);
  }

  public  parse(): Expression {
    this.arithmeticExpression();
    return this.root;
  }

  private arithmeticExpression(): void {
    this.arithmeticTerm();
    while (this.symbol && (this.symbol.token === TokenType.PLUS || this.symbol.token === TokenType.MINUS)) {
      let exp: NonTerminalExpression;
      if (this.symbol.token === TokenType.PLUS) {
        exp = new Sum();
      }
      else {
        exp = new Subtract();
      }

      exp.setLeft(this.root);
      this.arithmeticTerm();
      exp.setRight(this.root);

      this.root = exp;
    }
  }

  arithmeticTerm(): void {
    this.arithmeticFactor();
    while (this.symbol && (this.symbol.token === TokenType.MULTIPLICATION || this.symbol.token === TokenType.DIV || this.symbol.token === TokenType.MOD)) {
      let exp: NonTerminalExpression;

      switch (this.symbol.token) {
        case TokenType.MOD:
          exp = new Mod();
          break;
        case TokenType.DIV:
          exp = new Divide();
          break;
        case TokenType.MULTIPLICATION:
          exp = new Multiply();
          break;
      }
      exp.setLeft(this.root);
      this.arithmeticFactor();
      exp.setRight(this.root);
      this.root = exp;
    }
  }

  arithmeticFactor():void {
    this.symbol = this.tokenizer.next();
    //console.debug(`${TokenType[this.symbol.token]} is the current token at the factor level`);

    switch (this.symbol.token) {
      case TokenType.NUM_LITERAL:
        this.root = new NumLiteral(new Number(this.symbol.str).valueOf());
        this.symbol = this.tokenizer.next();
        break;
      case TokenType.START_PARENTHESIS:
        this.arithmeticExpression();
        this.symbol = this.tokenizer.next();
        if (this.symbol.token != TokenType.END_PARENTHESIS) {
          throw  new Error(') is expected!');
        }
        break;
      case TokenType.PLUS:
        this.arithmeticFactor();
        const uPlus = new UnaryPlus();
        uPlus.setLeft(this.root);
        this.root = uPlus;
        break;
      case TokenType.MINUS:
        this.arithmeticFactor();
        const uMinus = new UnaryMinus();
        uMinus.setLeft(this.root);
        this.root = uMinus;
        break;
      default:
        throw  new Error('Malformed expression! ');

    }

  }
}

