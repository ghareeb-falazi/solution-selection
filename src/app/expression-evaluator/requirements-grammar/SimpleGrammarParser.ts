// Generated from src/assets/SimpleGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SimpleGrammarListener } from './SimpleGrammarListener';
import { SimpleGrammarVisitor } from './SimpleGrammarVisitor';



export class BooleanExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimpleGrammarParser.RULE_booleanExpression; }

	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryBoolOpContext extends BooleanExpressionContext {
	public _op: Token;
	public _exp: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterUnaryBoolOp) listener.enterUnaryBoolOp(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitUnaryBoolOp) listener.exitUnaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryBoolOp) return visitor.visitUnaryBoolOp(this);
		else return visitor.visitChildren(this);
	}
}
export class StringComparisonContext extends BooleanExpressionContext {
	public _left: StringValueContext;
	public _op: Token;
	public _right: StringValueContext;
	public stringValue(): StringValueContext[];
	public stringValue(i: number): StringValueContext;
	public stringValue(i?: number): StringValueContext | StringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringValueContext);
		} else {
			return this.getRuleContext(i, StringValueContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterStringComparison) listener.enterStringComparison(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitStringComparison) listener.exitStringComparison(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitStringComparison) return visitor.visitStringComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolAtomContext extends BooleanExpressionContext {
	public _atom: Token;
	public BOOL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.BOOL_CONSTANT, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.VARIABLE, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterBoolAtom) listener.enterBoolAtom(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitBoolAtom) listener.exitBoolAtom(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitBoolAtom) return visitor.visitBoolAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticComparisonContext extends BooleanExpressionContext {
	public _left: ArithmeticExpressionContext;
	public _op: Token;
	public _right: ArithmeticExpressionContext;
	public arithmeticExpression(): ArithmeticExpressionContext[];
	public arithmeticExpression(i: number): ArithmeticExpressionContext;
	public arithmeticExpression(i?: number): ArithmeticExpressionContext | ArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, ArithmeticExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterArithmeticComparison) listener.enterArithmeticComparison(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitArithmeticComparison) listener.exitArithmeticComparison(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticComparison) return visitor.visitArithmeticComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class BinaryBoolOpContext extends BooleanExpressionContext {
	public _left: BooleanExpressionContext;
	public _op: Token;
	public _right: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterBinaryBoolOp) listener.enterBinaryBoolOp(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitBinaryBoolOp) listener.exitBinaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitBinaryBoolOp) return visitor.visitBinaryBoolOp(this);
		else return visitor.visitChildren(this);
	}
}


export class ArithmeticExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimpleGrammarParser.RULE_arithmeticExpression; }

	public copyFrom(ctx: ArithmeticExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BinaryArithmeticOpContext extends ArithmeticExpressionContext {
	public _left: ArithmeticExpressionContext;
	public _op: Token;
	public _right: ArithmeticExpressionContext;
	public arithmeticExpression(): ArithmeticExpressionContext[];
	public arithmeticExpression(i: number): ArithmeticExpressionContext;
	public arithmeticExpression(i?: number): ArithmeticExpressionContext | ArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, ArithmeticExpressionContext);
		}
	}
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterBinaryArithmeticOp) listener.enterBinaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitBinaryArithmeticOp) listener.exitBinaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitBinaryArithmeticOp) return visitor.visitBinaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticAtomContext extends ArithmeticExpressionContext {
	public _atom: Token;
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.VARIABLE, 0); }
	public SCIENTIFIC_NUMBER(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.SCIENTIFIC_NUMBER, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterArithmeticAtom) listener.enterArithmeticAtom(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitArithmeticAtom) listener.exitArithmeticAtom(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticAtom) return visitor.visitArithmeticAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class UnaryArithmeticOpContext extends ArithmeticExpressionContext {
	public _op: Token;
	public _exp: ArithmeticExpressionContext;
	public arithmeticExpression(): ArithmeticExpressionContext {
		return this.getRuleContext(0, ArithmeticExpressionContext);
	}
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterUnaryArithmeticOp) listener.enterUnaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitUnaryArithmeticOp) listener.exitUnaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryArithmeticOp) return visitor.visitUnaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}


export class StringValueContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimpleGrammarParser.RULE_stringValue; }

	public copyFrom(ctx: StringValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringAtomContext extends StringValueContext {
	public _atom: Token;
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.STRING_LITERAL, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(SimpleGrammarParser.VARIABLE, 0); }
	constructor(ctx: StringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimpleGrammarListener): void {
		if (listener.enterStringAtom) listener.enterStringAtom(this);
	}
	@Override
	public exitRule(listener: SimpleGrammarListener): void {
		if (listener.exitStringAtom) listener.exitStringAtom(this);
	}
	@Override
	public accept<Result>(visitor: SimpleGrammarVisitor<Result>): Result {
		if (visitor.visitStringAtom) return visitor.visitStringAtom(this);
		else return visitor.visitChildren(this);
	}
}



export class SimpleGrammarParser extends Parser {
  public static readonly T__0=1;
  public static readonly T__1=2;
  public static readonly T__2=3;
  public static readonly T__3=4;
  public static readonly T__4=5;
  public static readonly T__5=6;
  public static readonly T__6=7;
  public static readonly T__7=8;
  public static readonly T__8=9;
  public static readonly T__9=10;
  public static readonly T__10=11;
  public static readonly T__11=12;
  public static readonly T__12=13;
  public static readonly T__13=14;
  public static readonly T__14=15;
  public static readonly T__15=16;
  public static readonly T__16=17;
  public static readonly T__17=18;
  public static readonly BOOL_CONSTANT=19;
  public static readonly TRUE=20;
  public static readonly FALSE=21;
  public static readonly VARIABLE=22;
  public static readonly SCIENTIFIC_NUMBER=23;
  public static readonly STRING_LITERAL=24;
  public static readonly WS=25;
  public static readonly RULE_booleanExpression = 0;
  public static readonly RULE_arithmeticExpression = 1;
  public static readonly RULE_stringValue = 2;
  public static readonly ruleNames: string[] = [
    "booleanExpression", "arithmeticExpression", "stringValue"
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined, "'('", "')'", "'not'", "'NOT'", "'<'", "'>'", "'<='", "'>='",
    "'='", "'<>'", "'AND'", "'and'", "'OR'", "'or'", "'-'", "'+'", "'*'",
    "'/'"
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "BOOL_CONSTANT",
    "TRUE", "FALSE", "VARIABLE", "SCIENTIFIC_NUMBER", "STRING_LITERAL", "WS"
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleGrammarParser._LITERAL_NAMES, SimpleGrammarParser._SYMBOLIC_NAMES, []);

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return SimpleGrammarParser.VOCABULARY;
  }

  @Override
  public get grammarFileName(): string { return "SimpleGrammar.g4"; }

  @Override
  public get ruleNames(): string[] { return SimpleGrammarParser.ruleNames; }

  @Override
  public get serializedATN(): string { return SimpleGrammarParser._serializedATN; }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(SimpleGrammarParser._ATN, this);
  }
  public booleanExpression(): BooleanExpressionContext;
  public booleanExpression(_p: number): BooleanExpressionContext;
  @RuleVersion(0)
  public booleanExpression(_p?: number): BooleanExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
    let _prevctx: BooleanExpressionContext = _localctx;
    let _startState: number = 0;
    this.enterRecursionRule(_localctx, 0, SimpleGrammarParser.RULE_booleanExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 23;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
          case 1:
          {
            _localctx = new BoolAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 7;
            (_localctx as BoolAtomContext)._atom = this.match(SimpleGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new BoolAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 8;
            (_localctx as BoolAtomContext)._atom = this.match(SimpleGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 9;
            (_localctx as UnaryBoolOpContext)._op = this.match(SimpleGrammarParser.T__0);
            this.state = 10;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(0);
            this.state = 11;
            this.match(SimpleGrammarParser.T__1);
          }
            break;

          case 4:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 13;
            (_localctx as UnaryBoolOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===SimpleGrammarParser.T__2 || _la===SimpleGrammarParser.T__3) ) {
              (_localctx as UnaryBoolOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 14;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(5);
          }
            break;

          case 5:
          {
            _localctx = new ArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 15;
            (_localctx as ArithmeticComparisonContext)._left = this.arithmeticExpression(0);
            this.state = 16;
            (_localctx as ArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleGrammarParser.T__4) | (1 << SimpleGrammarParser.T__5) | (1 << SimpleGrammarParser.T__6) | (1 << SimpleGrammarParser.T__7) | (1 << SimpleGrammarParser.T__8) | (1 << SimpleGrammarParser.T__9))) !== 0)) ) {
              (_localctx as ArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 17;
            (_localctx as ArithmeticComparisonContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 6:
          {
            _localctx = new StringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 19;
            (_localctx as StringComparisonContext)._left = this.stringValue();
            this.state = 20;
            (_localctx as StringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===SimpleGrammarParser.T__8 || _la===SimpleGrammarParser.T__9) ) {
              (_localctx as StringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 21;
            (_localctx as StringComparisonContext)._right = this.stringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 33;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 31;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, SimpleGrammarParser.RULE_booleanExpression);
                  this.state = 25;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 26;
                  (_localctx as BinaryBoolOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===SimpleGrammarParser.T__10 || _la===SimpleGrammarParser.T__11) ) {
                    (_localctx as BinaryBoolOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 27;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, SimpleGrammarParser.RULE_booleanExpression);
                  this.state = 28;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 29;
                  (_localctx as BinaryBoolOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===SimpleGrammarParser.T__12 || _la===SimpleGrammarParser.T__13) ) {
                    (_localctx as BinaryBoolOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 30;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 35;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public arithmeticExpression(): ArithmeticExpressionContext;
  public arithmeticExpression(_p: number): ArithmeticExpressionContext;
  @RuleVersion(0)
  public arithmeticExpression(_p?: number): ArithmeticExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ArithmeticExpressionContext = new ArithmeticExpressionContext(this._ctx, _parentState);
    let _prevctx: ArithmeticExpressionContext = _localctx;
    let _startState: number = 2;
    this.enterRecursionRule(_localctx, 2, SimpleGrammarParser.RULE_arithmeticExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 45;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SimpleGrammarParser.VARIABLE:
          {
            _localctx = new ArithmeticAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 37;
            (_localctx as ArithmeticAtomContext)._atom = this.match(SimpleGrammarParser.VARIABLE);
          }
            break;
          case SimpleGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new ArithmeticAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 38;
            (_localctx as ArithmeticAtomContext)._atom = this.match(SimpleGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case SimpleGrammarParser.T__14:
          case SimpleGrammarParser.T__15:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 39;
            (_localctx as UnaryArithmeticOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===SimpleGrammarParser.T__14 || _la===SimpleGrammarParser.T__15) ) {
              (_localctx as UnaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 40;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(4);
          }
            break;
          case SimpleGrammarParser.T__0:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 41;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(SimpleGrammarParser.T__0);
            this.state = 42;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(0);
            this.state = 43;
            this.match(SimpleGrammarParser.T__1);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 55;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 53;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, SimpleGrammarParser.RULE_arithmeticExpression);
                  this.state = 47;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 48;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===SimpleGrammarParser.T__16 || _la===SimpleGrammarParser.T__17) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 49;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, SimpleGrammarParser.RULE_arithmeticExpression);
                  this.state = 50;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 51;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===SimpleGrammarParser.T__14 || _la===SimpleGrammarParser.T__15) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 52;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 57;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  @RuleVersion(0)
  public stringValue(): StringValueContext {
    let _localctx: StringValueContext = new StringValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, SimpleGrammarParser.RULE_stringValue);
    try {
      this.state = 60;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SimpleGrammarParser.STRING_LITERAL:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 58;
          (_localctx as StringAtomContext)._atom = this.match(SimpleGrammarParser.STRING_LITERAL);
        }
          break;
        case SimpleGrammarParser.VARIABLE:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 59;
          (_localctx as StringAtomContext)._atom = this.match(SimpleGrammarParser.VARIABLE);
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 0:
        return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

      case 1:
        return this.arithmeticExpression_sempred(_localctx as ArithmeticExpressionContext, predIndex);
    }
    return true;
  }
  private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2);

      case 1:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private arithmeticExpression_sempred(_localctx: ArithmeticExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 2);

      case 3:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1BA\x04\x02"+
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x05\x02\x1A\n\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x07\x02\"\n\x02\f\x02\x0E\x02%\v\x02\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03"+
    "0\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x038\n\x03"+
    "\f\x03\x0E\x03;\v\x03\x03\x04\x03\x04\x05\x04?\n\x04\x03\x04\x02\x02\x04"+
    "\x02\x04\x05\x02\x02\x04\x02\x06\x02\x02\t\x03\x02\x05\x06\x03\x02\x07"+
    "\f\x03\x02\v\f\x03\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x12\x03\x02\x13"+
    "\x14J\x02\x19\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x06>\x03\x02\x02\x02"+
    "\b\t\b\x02\x01\x02\t\x1A\x07\x15\x02\x02\n\x1A\x07\x18\x02\x02\v\f\x07"+
    "\x03\x02\x02\f\r\x05\x02\x02\x02\r\x0E\x07\x04\x02\x02\x0E\x1A\x03\x02"+
    "\x02\x02\x0F\x10\t\x02\x02\x02\x10\x1A\x05\x02\x02\x07\x11\x12\x05\x04"+
    "\x03\x02\x12\x13\t\x03\x02\x02\x13\x14\x05\x04\x03\x02\x14\x1A\x03\x02"+
    "\x02\x02\x15\x16\x05\x06\x04\x02\x16\x17\t\x04\x02\x02\x17\x18\x05\x06"+
    "\x04\x02\x18\x1A\x03\x02\x02\x02\x19\b\x03\x02\x02\x02\x19\n\x03\x02\x02"+
    "\x02\x19\v\x03\x02\x02\x02\x19\x0F\x03\x02\x02\x02\x19\x11\x03\x02\x02"+
    "\x02\x19\x15\x03\x02\x02\x02\x1A#\x03\x02\x02\x02\x1B\x1C\f\x04\x02\x02"+
    "\x1C\x1D\t\x05\x02\x02\x1D\"\x05\x02\x02\x05\x1E\x1F\f\x03\x02\x02\x1F"+
    " \t\x06\x02\x02 \"\x05\x02\x02\x04!\x1B\x03\x02\x02\x02!\x1E\x03\x02\x02"+
    "\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\x03\x03\x02"+
    "\x02\x02%#\x03\x02\x02\x02&\'\b\x03\x01\x02\'0\x07\x18\x02\x02(0\x07\x19"+
    "\x02\x02)*\t\x07\x02\x02*0\x05\x04\x03\x06+,\x07\x03\x02\x02,-\x05\x04"+
    "\x03\x02-.\x07\x04\x02\x02.0\x03\x02\x02\x02/&\x03\x02\x02\x02/(\x03\x02"+
    "\x02\x02/)\x03\x02\x02\x02/+\x03\x02\x02\x0209\x03\x02\x02\x0212\f\x04"+
    "\x02\x0223\t\b\x02\x0238\x05\x04\x03\x0545\f\x03\x02\x0256\t\x07\x02\x02"+
    "68\x05\x04\x03\x0471\x03\x02\x02\x0274\x03\x02\x02\x028;\x03\x02\x02\x02"+
    "97\x03\x02\x02\x029:\x03\x02\x02\x02:\x05\x03\x02\x02\x02;9\x03\x02\x02"+
    "\x02<?\x07\x1A\x02\x02=?\x07\x18\x02\x02><\x03\x02\x02\x02>=\x03\x02\x02"+
    "\x02?\x07\x03\x02\x02\x02\t\x19!#/79>";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!SimpleGrammarParser.__ATN) {
      SimpleGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleGrammarParser._serializedATN));
    }

    return SimpleGrammarParser.__ATN;
  }

}
