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
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";
/**
 * Created by falazigb on 21-Jul-17.
 */


export class ArithmeticParser extends AbstractParser {
  //private symbol: TokenWithStr<TokenType>;
  private root: Expression;

  constructor(lexer: Tokenizer) {
    super(lexer);
  }

  private readNext():TokenWithStr<TokenType> {
    return this.tokenizer.next();
  }

  private peekNext(): TokenWithStr<TokenType> {
    return this.tokenizer.peek();
  }

  public  parse(): Expression {
    this.arithmeticExpression();
    return this.root;
  }

  private arithmeticExpression(): void {
    this.arithmeticTerm();
    let nextToken: TokenWithStr<TokenType> = this.peekNext();

    while (nextToken && (nextToken.token === TokenType.PLUS || nextToken.token === TokenType.MINUS)) {
      this.readNext();
      //console.debug('after read next!');
      let exp: NonTerminalExpression;
      if (nextToken.token === TokenType.PLUS) {
        exp = new Sum();
      }
      else {
        exp = new Subtract();
      }

      exp.setLeft(this.root);
      this.arithmeticTerm();
      exp.setRight(this.root);

      this.root = exp;

      nextToken = this.peekNext();
    }
  }

  arithmeticTerm(): void {
    this.arithmeticFactor();

    let nextToken:TokenWithStr<TokenType> = this.peekNext();

    while (nextToken && (nextToken.token === TokenType.MULTIPLICATION || nextToken.token === TokenType.DIV ||nextToken.token === TokenType.MOD)) {
      this.readNext();
      let exp: NonTerminalExpression;

      switch (nextToken.token) {
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

      nextToken = this.peekNext();
    }
  }

  arithmeticFactor(): void {
    let nextToken: TokenWithStr<TokenType> = this.readNext();
    //console.debug(`${TokenType[this.symbol.token]} is the current token at the factor level`);

    switch (nextToken.token) {
      case TokenType.NUM_LITERAL:
        this.root = new NumLiteral(new Number(nextToken.str).valueOf());
        //this.symbol = this.tokenizer.next();
        break;
      case TokenType.START_PARENTHESIS:
        this.arithmeticExpression();
        nextToken = this.readNext();
        if (!nextToken || nextToken.token != TokenType.END_PARENTHESIS) {
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

