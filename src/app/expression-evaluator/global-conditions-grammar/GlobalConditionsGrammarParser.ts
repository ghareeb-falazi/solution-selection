// Generated from src/assets/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


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

import { GlobalConditionsGrammarListener } from './GlobalConditionsGrammarListener';
import { GlobalConditionsGrammarVisitor } from './GlobalConditionsGrammarVisitor';



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
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_booleanExpression; }

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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterUnaryBoolOp) listener.enterUnaryBoolOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitUnaryBoolOp) listener.exitUnaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterStringComparison) listener.enterStringComparison(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitStringComparison) listener.exitStringComparison(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitStringComparison) return visitor.visitStringComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class BooleanFuncContext extends BooleanExpressionContext {
	public _func: Token;
	public _variable: Token;
	public _value: Token;
	public VARIABLE(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	public BOOL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.BOOL_CONSTANT, 0); }
	public SCIENTIFIC_NUMBER(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.STRING_LITERAL, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBooleanFunc) listener.enterBooleanFunc(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBooleanFunc) listener.exitBooleanFunc(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitBooleanFunc) return visitor.visitBooleanFunc(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolAtomContext extends BooleanExpressionContext {
	public _atom: Token;
	public BOOL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.BOOL_CONSTANT, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBoolAtom) listener.enterBoolAtom(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBoolAtom) listener.exitBoolAtom(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterArithmeticComparison) listener.enterArithmeticComparison(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitArithmeticComparison) listener.exitArithmeticComparison(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBinaryBoolOp) listener.enterBinaryBoolOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBinaryBoolOp) listener.exitBinaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_arithmeticExpression; }

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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBinaryArithmeticOp) listener.enterBinaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBinaryArithmeticOp) listener.exitBinaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitBinaryArithmeticOp) return visitor.visitBinaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticAtomContext extends ArithmeticExpressionContext {
	public _atom: Token;
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	public SCIENTIFIC_NUMBER(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterArithmeticAtom) listener.enterArithmeticAtom(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitArithmeticAtom) listener.exitArithmeticAtom(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticAtom) return visitor.visitArithmeticAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticFuncContext extends ArithmeticExpressionContext {
	public _func: Token;
	public _variable: Token;
	public VARIABLE(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterArithmeticFunc) listener.enterArithmeticFunc(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitArithmeticFunc) listener.exitArithmeticFunc(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticFunc) return visitor.visitArithmeticFunc(this);
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
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterUnaryArithmeticOp) listener.enterUnaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitUnaryArithmeticOp) listener.exitUnaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_stringValue; }

	public copyFrom(ctx: StringValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringAtomContext extends StringValueContext {
	public _atom: Token;
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.STRING_LITERAL, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	constructor(ctx: StringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterStringAtom) listener.enterStringAtom(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitStringAtom) listener.exitStringAtom(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitStringAtom) return visitor.visitStringAtom(this);
		else return visitor.visitChildren(this);
	}
}

export class GlobalConditionsGrammarParser extends Parser {
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
  public static readonly T__18=19;
  public static readonly T__19=20;
  public static readonly T__20=21;
  public static readonly T__21=22;
  public static readonly T__22=23;
  public static readonly T__23=24;
  public static readonly T__24=25;
  public static readonly T__25=26;
  public static readonly T__26=27;
  public static readonly BOOL_CONSTANT=28;
  public static readonly TRUE=29;
  public static readonly FALSE=30;
  public static readonly VARIABLE=31;
  public static readonly SCIENTIFIC_NUMBER=32;
  public static readonly STRING_LITERAL=33;
  public static readonly WS=34;
  public static readonly RULE_booleanExpression = 0;
  public static readonly RULE_arithmeticExpression = 1;
  public static readonly RULE_stringValue = 2;
  public static readonly ruleNames: string[] = [
    "booleanExpression", "arithmeticExpression", "stringValue"
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined, "'exists_value'", "'EXISTS_VALUE'", "'('", "','", "')'", "'not'",
    "'NOT'", "'<'", "'>'", "'<='", "'>='", "'='", "'<>'", "'AND'", "'and'",
    "'OR'", "'or'", "'sum'", "'SUM'", "'count'", "'COUNT'", "'avg'", "'AVG'",
    "'-'", "'+'", "'*'", "'/'"
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "BOOL_CONSTANT", "TRUE", "FALSE", "VARIABLE", "SCIENTIFIC_NUMBER", "STRING_LITERAL",
    "WS"
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GlobalConditionsGrammarParser._LITERAL_NAMES, GlobalConditionsGrammarParser._SYMBOLIC_NAMES, []);

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return GlobalConditionsGrammarParser.VOCABULARY;
  }

  @Override
  public get grammarFileName(): string { return "GlobalConditionsGrammar.g4"; }

  @Override
  public get ruleNames(): string[] { return GlobalConditionsGrammarParser.ruleNames; }

  @Override
  public get serializedATN(): string { return GlobalConditionsGrammarParser._serializedATN; }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(GlobalConditionsGrammarParser._ATN, this);
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
    this.enterRecursionRule(_localctx, 0, GlobalConditionsGrammarParser.RULE_booleanExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 29;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
          case 1:
          {
            _localctx = new BoolAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 7;
            (_localctx as BoolAtomContext)._atom = this.match(GlobalConditionsGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new BoolAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 8;
            (_localctx as BoolAtomContext)._atom = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new BooleanFuncContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 9;
            (_localctx as BooleanFuncContext)._func = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__0 || _la===GlobalConditionsGrammarParser.T__1) ) {
              (_localctx as BooleanFuncContext)._func = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 10;
            this.match(GlobalConditionsGrammarParser.T__2);
            this.state = 11;
            (_localctx as BooleanFuncContext)._variable = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 12;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 13;
            (_localctx as BooleanFuncContext)._value = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (GlobalConditionsGrammarParser.BOOL_CONSTANT - 28)) | (1 << (GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER - 28)) | (1 << (GlobalConditionsGrammarParser.STRING_LITERAL - 28)))) !== 0)) ) {
              (_localctx as BooleanFuncContext)._value = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 14;
            this.match(GlobalConditionsGrammarParser.T__4);
          }
            break;

          case 4:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 15;
            (_localctx as UnaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.T__2);
            this.state = 16;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(0);
            this.state = 17;
            this.match(GlobalConditionsGrammarParser.T__4);
          }
            break;

          case 5:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 19;
            (_localctx as UnaryBoolOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__5 || _la===GlobalConditionsGrammarParser.T__6) ) {
              (_localctx as UnaryBoolOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 20;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(5);
          }
            break;

          case 6:
          {
            _localctx = new ArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 21;
            (_localctx as ArithmeticComparisonContext)._left = this.arithmeticExpression(0);
            this.state = 22;
            (_localctx as ArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__7) | (1 << GlobalConditionsGrammarParser.T__8) | (1 << GlobalConditionsGrammarParser.T__9) | (1 << GlobalConditionsGrammarParser.T__10) | (1 << GlobalConditionsGrammarParser.T__11) | (1 << GlobalConditionsGrammarParser.T__12))) !== 0)) ) {
              (_localctx as ArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 23;
            (_localctx as ArithmeticComparisonContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 7:
          {
            _localctx = new StringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 25;
            (_localctx as StringComparisonContext)._left = this.stringValue();
            this.state = 26;
            (_localctx as StringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__11 || _la===GlobalConditionsGrammarParser.T__12) ) {
              (_localctx as StringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 27;
            (_localctx as StringComparisonContext)._right = this.stringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 37;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 31;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 32;
                  (_localctx as BinaryBoolOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__13 || _la===GlobalConditionsGrammarParser.T__14) ) {
                    (_localctx as BinaryBoolOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 33;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 34;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 35;
                  (_localctx as BinaryBoolOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__15 || _la===GlobalConditionsGrammarParser.T__16) ) {
                    (_localctx as BinaryBoolOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 36;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 41;
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
    this.enterRecursionRule(_localctx, 2, GlobalConditionsGrammarParser.RULE_arithmeticExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 55;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case GlobalConditionsGrammarParser.VARIABLE:
          {
            _localctx = new ArithmeticAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 43;
            (_localctx as ArithmeticAtomContext)._atom = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;
          case GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new ArithmeticAtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 44;
            (_localctx as ArithmeticAtomContext)._atom = this.match(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case GlobalConditionsGrammarParser.T__17:
          case GlobalConditionsGrammarParser.T__18:
          case GlobalConditionsGrammarParser.T__19:
          case GlobalConditionsGrammarParser.T__20:
          case GlobalConditionsGrammarParser.T__21:
          case GlobalConditionsGrammarParser.T__22:
          {
            _localctx = new ArithmeticFuncContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 45;
            (_localctx as ArithmeticFuncContext)._func = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__17) | (1 << GlobalConditionsGrammarParser.T__18) | (1 << GlobalConditionsGrammarParser.T__19) | (1 << GlobalConditionsGrammarParser.T__20) | (1 << GlobalConditionsGrammarParser.T__21) | (1 << GlobalConditionsGrammarParser.T__22))) !== 0)) ) {
              (_localctx as ArithmeticFuncContext)._func = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 46;
            this.match(GlobalConditionsGrammarParser.T__2);
            this.state = 47;
            (_localctx as ArithmeticFuncContext)._variable = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 48;
            this.match(GlobalConditionsGrammarParser.T__4);
          }
            break;
          case GlobalConditionsGrammarParser.T__23:
          case GlobalConditionsGrammarParser.T__24:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 49;
            (_localctx as UnaryArithmeticOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__23 || _la===GlobalConditionsGrammarParser.T__24) ) {
              (_localctx as UnaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 50;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(4);
          }
            break;
          case GlobalConditionsGrammarParser.T__2:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 51;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.T__2);
            this.state = 52;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(0);
            this.state = 53;
            this.match(GlobalConditionsGrammarParser.T__4);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 65;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 63;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 57;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 58;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__25 || _la===GlobalConditionsGrammarParser.T__26) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 59;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 60;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 61;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__23 || _la===GlobalConditionsGrammarParser.T__24) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 62;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 67;
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
    this.enterRule(_localctx, 4, GlobalConditionsGrammarParser.RULE_stringValue);
    try {
      this.state = 70;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GlobalConditionsGrammarParser.STRING_LITERAL:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 68;
          (_localctx as StringAtomContext)._atom = this.match(GlobalConditionsGrammarParser.STRING_LITERAL);
        }
          break;
        case GlobalConditionsGrammarParser.VARIABLE:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 69;
          (_localctx as StringAtomContext)._atom = this.match(GlobalConditionsGrammarParser.VARIABLE);
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
    "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03$K\x04\x02\t\x02"+
    "\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05"+
    "\x02 \n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02(\n"+
    "\x02\f\x02\x0E\x02+\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:"+
    "\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03B\n\x03"+
    "\f\x03\x0E\x03E\v\x03\x03\x04\x03\x04\x05\x04I\n\x04\x03\x04\x02\x02\x04"+
    "\x02\x04\x05\x02\x02\x04\x02\x06\x02\x02\f\x03\x02\x03\x04\x04\x02\x1E"+
    "\x1E\"#\x03\x02\b\t\x03\x02\n\x0F\x03\x02\x0E\x0F\x03\x02\x10\x11\x03"+
    "\x02\x12\x13\x03\x02\x14\x19\x03\x02\x1A\x1B\x03\x02\x1C\x1DV\x02\x1F"+
    "\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06H\x03\x02\x02\x02\b\t\b\x02\x01"+
    "\x02\t \x07\x1E\x02\x02\n \x07!\x02\x02\v\f\t\x02\x02\x02\f\r\x07\x05"+
    "\x02\x02\r\x0E\x07!\x02\x02\x0E\x0F\x07\x06\x02\x02\x0F\x10\t\x03\x02"+
    "\x02\x10 \x07\x07\x02\x02\x11\x12\x07\x05\x02\x02\x12\x13\x05\x02\x02"+
    "\x02\x13\x14\x07\x07\x02\x02\x14 \x03\x02\x02\x02\x15\x16\t\x04\x02\x02"+
    "\x16 \x05\x02\x02\x07\x17\x18\x05\x04\x03\x02\x18\x19\t\x05\x02\x02\x19"+
    "\x1A\x05\x04\x03\x02\x1A \x03\x02\x02\x02\x1B\x1C\x05\x06\x04\x02\x1C"+
    "\x1D\t\x06\x02\x02\x1D\x1E\x05\x06\x04\x02\x1E \x03\x02\x02\x02\x1F\b"+
    "\x03\x02\x02\x02\x1F\n\x03\x02\x02\x02\x1F\v\x03\x02\x02\x02\x1F\x11\x03"+
    "\x02\x02\x02\x1F\x15\x03\x02\x02\x02\x1F\x17\x03\x02\x02\x02\x1F\x1B\x03"+
    "\x02\x02\x02 )\x03\x02\x02\x02!\"\f\x04\x02\x02\"#\t\x07\x02\x02#(\x05"+
    "\x02\x02\x05$%\f\x03\x02\x02%&\t\b\x02\x02&(\x05\x02\x02\x04\'!\x03\x02"+
    "\x02\x02\'$\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03"+
    "\x02\x02\x02*\x03\x03\x02\x02\x02+)\x03\x02\x02\x02,-\b\x03\x01\x02-:"+
    "\x07!\x02\x02.:\x07\"\x02\x02/0\t\t\x02\x0201\x07\x05\x02\x0212\x07!\x02"+
    "\x022:\x07\x07\x02\x0234\t\n\x02\x024:\x05\x04\x03\x0656\x07\x05\x02\x02"+
    "67\x05\x04\x03\x0278\x07\x07\x02\x028:\x03\x02\x02\x029,\x03\x02\x02\x02"+
    "9.\x03\x02\x02\x029/\x03\x02\x02\x0293\x03\x02\x02\x0295\x03\x02\x02\x02"+
    ":C\x03\x02\x02\x02;<\f\x04\x02\x02<=\t\v\x02\x02=B\x05\x04\x03\x05>?\f"+
    "\x03\x02\x02?@\t\n\x02\x02@B\x05\x04\x03\x04A;\x03\x02\x02\x02A>\x03\x02"+
    "\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\x05\x03"+
    "\x02\x02\x02EC\x03\x02\x02\x02FI\x07#\x02\x02GI\x07!\x02\x02HF\x03\x02"+
    "\x02\x02HG\x03\x02\x02\x02I\x07\x03\x02\x02\x02\t\x1F\')9ACH";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GlobalConditionsGrammarParser.__ATN) {
      GlobalConditionsGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GlobalConditionsGrammarParser._serializedATN));
    }

    return GlobalConditionsGrammarParser.__ATN;
  }

}

