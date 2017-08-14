// Generated from src/assets/RequirementsGrammar.g4 by ANTLR 4.6-SNAPSHOT


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

import { RequirementsGrammarListener } from './RequirementsGrammarListener';
import { RequirementsGrammarVisitor } from './RequirementsGrammarVisitor';



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
	@Override public get ruleIndex(): number { return RequirementsGrammarParser.RULE_booleanExpression; }

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
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.NOT, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterUnaryBoolOp) listener.enterUnaryBoolOp(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitUnaryBoolOp) listener.exitUnaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
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
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterStringComparison) listener.enterStringComparison(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitStringComparison) listener.exitStringComparison(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitStringComparison) return visitor.visitStringComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolVariableContext extends BooleanExpressionContext {
	public _cs: Token;
	public _capability: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RequirementsGrammarParser.VARIABLE);
		} else {
			return this.getToken(RequirementsGrammarParser.VARIABLE, i);
		}
	}
	public ANY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.ANY, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.INITIAL_CAPABILITY, 0); }
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.PREVIOUS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.NEXT, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.CS, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterBoolVariable) listener.enterBoolVariable(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitBoolVariable) listener.exitBoolVariable(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitBoolVariable) return visitor.visitBoolVariable(this);
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
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterArithmeticComparison) listener.enterArithmeticComparison(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitArithmeticComparison) listener.exitArithmeticComparison(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticComparison) return visitor.visitArithmeticComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolConstantContext extends BooleanExpressionContext {
	public _atom: Token;
	public BOOL_CONSTANT(): TerminalNode { return this.getToken(RequirementsGrammarParser.BOOL_CONSTANT, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterBoolConstant) listener.enterBoolConstant(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitBoolConstant) listener.exitBoolConstant(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitBoolConstant) return visitor.visitBoolConstant(this);
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterBinaryBoolOp) listener.enterBinaryBoolOp(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitBinaryBoolOp) listener.exitBinaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
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
	@Override public get ruleIndex(): number { return RequirementsGrammarParser.RULE_arithmeticExpression; }

	public copyFrom(ctx: ArithmeticExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ArithmeticConstantContext extends ArithmeticExpressionContext {
	public _atom: Token;
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(RequirementsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterArithmeticConstant) listener.enterArithmeticConstant(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitArithmeticConstant) listener.exitArithmeticConstant(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticConstant) return visitor.visitArithmeticConstant(this);
		else return visitor.visitChildren(this);
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
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterBinaryArithmeticOp) listener.enterBinaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitBinaryArithmeticOp) listener.exitBinaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitBinaryArithmeticOp) return visitor.visitBinaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticVariableContext extends ArithmeticExpressionContext {
	public _cs: Token;
	public _capability: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RequirementsGrammarParser.VARIABLE);
		} else {
			return this.getToken(RequirementsGrammarParser.VARIABLE, i);
		}
	}
	public ANY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.ANY, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.INITIAL_CAPABILITY, 0); }
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.PREVIOUS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.NEXT, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.CS, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterArithmeticVariable) listener.enterArithmeticVariable(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitArithmeticVariable) listener.exitArithmeticVariable(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticVariable) return visitor.visitArithmeticVariable(this);
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
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterUnaryArithmeticOp) listener.enterUnaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitUnaryArithmeticOp) listener.exitUnaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
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
	@Override public get ruleIndex(): number { return RequirementsGrammarParser.RULE_stringValue; }

	public copyFrom(ctx: StringValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringVariableContext extends StringValueContext {
	public _cs: Token;
	public _capability: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RequirementsGrammarParser.VARIABLE);
		} else {
			return this.getToken(RequirementsGrammarParser.VARIABLE, i);
		}
	}
	public ANY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.ANY, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.INITIAL_CAPABILITY, 0); }
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.PREVIOUS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.NEXT, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(RequirementsGrammarParser.CS, 0); }
	constructor(ctx: StringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterStringVariable) listener.enterStringVariable(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitStringVariable) listener.exitStringVariable(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitStringVariable) return visitor.visitStringVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class StringConstantContext extends StringValueContext {
	public _atom: Token;
	public STRING_LITERAL(): TerminalNode { return this.getToken(RequirementsGrammarParser.STRING_LITERAL, 0); }
	constructor(ctx: StringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: RequirementsGrammarListener): void {
		if (listener.enterStringConstant) listener.enterStringConstant(this);
	}
	@Override
	public exitRule(listener: RequirementsGrammarListener): void {
		if (listener.exitStringConstant) listener.exitStringConstant(this);
	}
	@Override
	public accept<Result>(visitor: RequirementsGrammarVisitor<Result>): Result {
		if (visitor.visitStringConstant) return visitor.visitStringConstant(this);
		else return visitor.visitChildren(this);
	}
}

export class RequirementsGrammarParser extends Parser {
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
  public static readonly CS=14;
  public static readonly AND=15;
  public static readonly OR=16;
  public static readonly NOT=17;
  public static readonly ANY=18;
  public static readonly INITIAL_CAPABILITY=19;
  public static readonly PREVIOUS=20;
  public static readonly NEXT=21;
  public static readonly BOOL_CONSTANT=22;
  public static readonly TRUE=23;
  public static readonly FALSE=24;
  public static readonly VARIABLE=25;
  public static readonly SCIENTIFIC_NUMBER=26;
  public static readonly STRING_LITERAL=27;
  public static readonly WS=28;
  public static readonly RULE_booleanExpression = 0;
  public static readonly RULE_arithmeticExpression = 1;
  public static readonly RULE_stringValue = 2;
  public static readonly ruleNames: string[] = [
    "booleanExpression", "arithmeticExpression", "stringValue"
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined, "'.'", "'('", "')'", "'<'", "'>'", "'<='", "'>='", "'='", "'<>'",
    "'-'", "'+'", "'*'", "'/'"
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "CS", "AND", "OR", "NOT", "ANY", "INITIAL_CAPABILITY", "PREVIOUS", "NEXT",
    "BOOL_CONSTANT", "TRUE", "FALSE", "VARIABLE", "SCIENTIFIC_NUMBER", "STRING_LITERAL",
    "WS"
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RequirementsGrammarParser._LITERAL_NAMES, RequirementsGrammarParser._SYMBOLIC_NAMES, []);

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return RequirementsGrammarParser.VOCABULARY;
  }

  @Override
  public get grammarFileName(): string { return "RequirementsGrammar.g4"; }

  @Override
  public get ruleNames(): string[] { return RequirementsGrammarParser.ruleNames; }

  @Override
  public get serializedATN(): string { return RequirementsGrammarParser._serializedATN; }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(RequirementsGrammarParser._ATN, this);
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
    this.enterRecursionRule(_localctx, 0, RequirementsGrammarParser.RULE_booleanExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 27;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
          case 1:
          {
            _localctx = new BoolConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 7;
            (_localctx as BoolConstantContext)._atom = this.match(RequirementsGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new BoolVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 8;
            (_localctx as BoolVariableContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RequirementsGrammarParser.CS) | (1 << RequirementsGrammarParser.ANY) | (1 << RequirementsGrammarParser.INITIAL_CAPABILITY) | (1 << RequirementsGrammarParser.PREVIOUS) | (1 << RequirementsGrammarParser.NEXT))) !== 0)) ) {
              (_localctx as BoolVariableContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 9;
            this.match(RequirementsGrammarParser.T__0);
            this.state = 10;
            (_localctx as BoolVariableContext)._capability = this.match(RequirementsGrammarParser.VARIABLE);
            this.state = 11;
            this.match(RequirementsGrammarParser.T__0);
            this.state = 12;
            (_localctx as BoolVariableContext)._property = this.match(RequirementsGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 13;
            (_localctx as UnaryBoolOpContext)._op = this.match(RequirementsGrammarParser.T__1);
            this.state = 14;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(0);
            this.state = 15;
            this.match(RequirementsGrammarParser.T__2);
          }
            break;

          case 4:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 17;
            (_localctx as UnaryBoolOpContext)._op = this.match(RequirementsGrammarParser.NOT);
            this.state = 18;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(5);
          }
            break;

          case 5:
          {
            _localctx = new ArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 19;
            (_localctx as ArithmeticComparisonContext)._left = this.arithmeticExpression(0);
            this.state = 20;
            (_localctx as ArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RequirementsGrammarParser.T__3) | (1 << RequirementsGrammarParser.T__4) | (1 << RequirementsGrammarParser.T__5) | (1 << RequirementsGrammarParser.T__6) | (1 << RequirementsGrammarParser.T__7) | (1 << RequirementsGrammarParser.T__8))) !== 0)) ) {
              (_localctx as ArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 21;
            (_localctx as ArithmeticComparisonContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 6:
          {
            _localctx = new StringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 23;
            (_localctx as StringComparisonContext)._left = this.stringValue();
            this.state = 24;
            (_localctx as StringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===RequirementsGrammarParser.T__7 || _la===RequirementsGrammarParser.T__8) ) {
              (_localctx as StringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 25;
            (_localctx as StringComparisonContext)._right = this.stringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 37;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 35;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, RequirementsGrammarParser.RULE_booleanExpression);
                  this.state = 29;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 30;
                  (_localctx as BinaryBoolOpContext)._op = this.match(RequirementsGrammarParser.AND);
                  this.state = 31;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, RequirementsGrammarParser.RULE_booleanExpression);
                  this.state = 32;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 33;
                  (_localctx as BinaryBoolOpContext)._op = this.match(RequirementsGrammarParser.OR);
                  this.state = 34;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 39;
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
    this.enterRecursionRule(_localctx, 2, RequirementsGrammarParser.RULE_arithmeticExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 53;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case RequirementsGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new ArithmeticConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 41;
            (_localctx as ArithmeticConstantContext)._atom = this.match(RequirementsGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case RequirementsGrammarParser.CS:
          case RequirementsGrammarParser.ANY:
          case RequirementsGrammarParser.INITIAL_CAPABILITY:
          case RequirementsGrammarParser.PREVIOUS:
          case RequirementsGrammarParser.NEXT:
          {
            _localctx = new ArithmeticVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 42;
            (_localctx as ArithmeticVariableContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RequirementsGrammarParser.CS) | (1 << RequirementsGrammarParser.ANY) | (1 << RequirementsGrammarParser.INITIAL_CAPABILITY) | (1 << RequirementsGrammarParser.PREVIOUS) | (1 << RequirementsGrammarParser.NEXT))) !== 0)) ) {
              (_localctx as ArithmeticVariableContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 43;
            this.match(RequirementsGrammarParser.T__0);
            this.state = 44;
            (_localctx as ArithmeticVariableContext)._capability = this.match(RequirementsGrammarParser.VARIABLE);
            this.state = 45;
            this.match(RequirementsGrammarParser.T__0);
            this.state = 46;
            (_localctx as ArithmeticVariableContext)._property = this.match(RequirementsGrammarParser.VARIABLE);
          }
            break;
          case RequirementsGrammarParser.T__1:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 47;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(RequirementsGrammarParser.T__1);
            this.state = 48;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(0);
            this.state = 49;
            this.match(RequirementsGrammarParser.T__2);
          }
            break;
          case RequirementsGrammarParser.T__9:
          case RequirementsGrammarParser.T__10:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 51;
            (_localctx as UnaryArithmeticOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===RequirementsGrammarParser.T__9 || _la===RequirementsGrammarParser.T__10) ) {
              (_localctx as UnaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 52;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(3);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 63;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 61;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, RequirementsGrammarParser.RULE_arithmeticExpression);
                  this.state = 55;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 56;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===RequirementsGrammarParser.T__11 || _la===RequirementsGrammarParser.T__12) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 57;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, RequirementsGrammarParser.RULE_arithmeticExpression);
                  this.state = 58;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 59;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===RequirementsGrammarParser.T__9 || _la===RequirementsGrammarParser.T__10) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 60;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 65;
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
    this.enterRule(_localctx, 4, RequirementsGrammarParser.RULE_stringValue);
    let _la: number;
    try {
      this.state = 72;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case RequirementsGrammarParser.STRING_LITERAL:
          _localctx = new StringConstantContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 66;
          (_localctx as StringConstantContext)._atom = this.match(RequirementsGrammarParser.STRING_LITERAL);
        }
          break;
        case RequirementsGrammarParser.CS:
        case RequirementsGrammarParser.ANY:
        case RequirementsGrammarParser.INITIAL_CAPABILITY:
        case RequirementsGrammarParser.PREVIOUS:
        case RequirementsGrammarParser.NEXT:
          _localctx = new StringVariableContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 67;
          (_localctx as StringVariableContext)._cs = this._input.LT(1);
          _la = this._input.LA(1);
          if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RequirementsGrammarParser.CS) | (1 << RequirementsGrammarParser.ANY) | (1 << RequirementsGrammarParser.INITIAL_CAPABILITY) | (1 << RequirementsGrammarParser.PREVIOUS) | (1 << RequirementsGrammarParser.NEXT))) !== 0)) ) {
            (_localctx as StringVariableContext)._cs = this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 68;
          this.match(RequirementsGrammarParser.T__0);
          this.state = 69;
          (_localctx as StringVariableContext)._capability = this.match(RequirementsGrammarParser.VARIABLE);
          this.state = 70;
          this.match(RequirementsGrammarParser.T__0);
          this.state = 71;
          (_localctx as StringVariableContext)._property = this.match(RequirementsGrammarParser.VARIABLE);
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
    "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1EM\x04\x02"+
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x1E"+
    "\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02&\n\x02"+
    "\f\x02\x0E\x02)\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x038\n\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03@\n\x03\f\x03"+
    "\x0E\x03C\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04"+
    "K\n\x04\x03\x04\x02\x02\x04\x02\x04\x05\x02\x02\x04\x02\x06\x02\x02\x07"+
    "\x04\x02\x10\x10\x14\x17\x03\x02\x06\v\x03\x02\n\v\x03\x02\f\r\x03\x02"+
    "\x0E\x0FV\x02\x1D\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06J\x03\x02\x02"+
    "\x02\b\t\b\x02\x01\x02\t\x1E\x07\x18\x02\x02\n\v\t\x02\x02\x02\v\f\x07"+
    "\x03\x02\x02\f\r\x07\x1B\x02\x02\r\x0E\x07\x03\x02\x02\x0E\x1E\x07\x1B"+
    "\x02\x02\x0F\x10\x07\x04\x02\x02\x10\x11\x05\x02\x02\x02\x11\x12\x07\x05"+
    "\x02\x02\x12\x1E\x03\x02\x02\x02\x13\x14\x07\x13\x02\x02\x14\x1E\x05\x02"+
    "\x02\x07\x15\x16\x05\x04\x03\x02\x16\x17\t\x03\x02\x02\x17\x18\x05\x04"+
    "\x03\x02\x18\x1E\x03\x02\x02\x02\x19\x1A\x05\x06\x04\x02\x1A\x1B\t\x04"+
    "\x02\x02\x1B\x1C\x05\x06\x04\x02\x1C\x1E\x03\x02\x02\x02\x1D\b\x03\x02"+
    "\x02\x02\x1D\n\x03\x02\x02\x02\x1D\x0F\x03\x02\x02\x02\x1D\x13\x03\x02"+
    "\x02\x02\x1D\x15\x03\x02\x02\x02\x1D\x19\x03\x02\x02\x02\x1E\'\x03\x02"+
    "\x02\x02\x1F \f\x04\x02\x02 !\x07\x11\x02\x02!&\x05\x02\x02\x05\"#\f\x03"+
    "\x02\x02#$\x07\x12\x02\x02$&\x05\x02\x02\x04%\x1F\x03\x02\x02\x02%\"\x03"+
    "\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02("+
    "\x03\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\b\x03\x01\x02+8\x07\x1C\x02"+
    "\x02,-\t\x02\x02\x02-.\x07\x03\x02\x02./\x07\x1B\x02\x02/0\x07\x03\x02"+
    "\x0208\x07\x1B\x02\x0212\x07\x04\x02\x0223\x05\x04\x03\x0234\x07\x05\x02"+
    "\x0248\x03\x02\x02\x0256\t\x05\x02\x0268\x05\x04\x03\x057*\x03\x02\x02"+
    "\x027,\x03\x02\x02\x0271\x03\x02\x02\x0275\x03\x02\x02\x028A\x03\x02\x02"+
    "\x029:\f\x04\x02\x02:;\t\x06\x02\x02;@\x05\x04\x03\x05<=\f\x03\x02\x02"+
    "=>\t\x05\x02\x02>@\x05\x04\x03\x04?9\x03\x02\x02\x02?<\x03\x02\x02\x02"+
    "@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x05\x03\x02\x02"+
    "\x02CA\x03\x02\x02\x02DK\x07\x1D\x02\x02EF\t\x02\x02\x02FG\x07\x03\x02"+
    "\x02GH\x07\x1B\x02\x02HI\x07\x03\x02\x02IK\x07\x1B\x02\x02JD\x03\x02\x02"+
    "\x02JE\x03\x02\x02\x02K\x07\x03\x02\x02\x02\t\x1D%\'7?AJ";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!RequirementsGrammarParser.__ATN) {
      RequirementsGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RequirementsGrammarParser._serializedATN));
    }

    return RequirementsGrammarParser.__ATN;
  }

}

