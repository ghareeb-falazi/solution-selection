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
	public NOT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.NOT, 0); }
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
export class ExistsValContext extends BooleanExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public _property: Token;
	public _value: Token;
	public EXISTS_VAL(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_VAL, 0); }
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	public ANY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ANY, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.INITIAL_CAPABILITY, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.CS, 0); }
	public SCIENTIFIC_NUMBER(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.STRING_LITERAL, 0); }
	public BOOL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.BOOL_CONSTANT, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterExistsVal) listener.enterExistsVal(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitExistsVal) listener.exitExistsVal(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitExistsVal) return visitor.visitExistsVal(this);
		else return visitor.visitChildren(this);
	}
}
export class ExistsCSContext extends BooleanExpressionContext {
	public _cs: Token;
	public EXISTS_CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_CS, 0); }
	public CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.CS, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterExistsCS) listener.enterExistsCS(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitExistsCS) listener.exitExistsCS(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitExistsCS) return visitor.visitExistsCS(this);
		else return visitor.visitChildren(this);
	}
}
export class ExistsCapContext extends BooleanExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public EXISTS_CAP(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_CAP, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ANY, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.INITIAL_CAPABILITY, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.CS, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterExistsCap) listener.enterExistsCap(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitExistsCap) listener.exitExistsCap(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitExistsCap) return visitor.visitExistsCap(this);
		else return visitor.visitChildren(this);
	}
}
export class BooleanVariableContext extends BooleanExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ALL, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.INITIAL_CAPABILITY, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.CS, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBooleanVariable) listener.enterBooleanVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBooleanVariable) listener.exitBooleanVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitBooleanVariable) return visitor.visitBooleanVariable(this);
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
export class BoolConstantContext extends BooleanExpressionContext {
	public _atom: Token;
	public BOOL_CONSTANT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.BOOL_CONSTANT, 0); }
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBoolConstant) listener.enterBoolConstant(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBoolConstant) listener.exitBoolConstant(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
	public AND(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.OR, 0); }
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
export class ArithmeticConstantContext extends ArithmeticExpressionContext {
	public _atom: Token;
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterArithmeticConstant) listener.enterArithmeticConstant(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitArithmeticConstant) listener.exitArithmeticConstant(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
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
export class ArithmeticVariableContext extends ArithmeticExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ALL, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.INITIAL_CAPABILITY, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.CS, 0); }
	constructor(ctx: ArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterArithmeticVariable) listener.enterArithmeticVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitArithmeticVariable) listener.exitArithmeticVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitArithmeticVariable) return visitor.visitArithmeticVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class ArithmeticFuncContext extends ArithmeticExpressionContext {
	public _func: Token;
	public _cap: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	public SUM(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SUM, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.COUNT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.AVG, 0); }
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
export class StringVariableContext extends StringValueContext {
	public _cs: Token;
	public _cap: Token;
	public _property: Token;
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ALL, 0); }
	public INITIAL_CAPABILITY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.INITIAL_CAPABILITY, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.CS, 0); }
	constructor(ctx: StringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterStringVariable) listener.enterStringVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitStringVariable) listener.exitStringVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitStringVariable) return visitor.visitStringVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class StringAtomContext extends StringValueContext {
	public _atom: Token;
	public STRING_LITERAL(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.STRING_LITERAL, 0); }
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
  public static readonly CS=15;
  public static readonly EXISTS_CS=16;
  public static readonly EXISTS_CAP=17;
  public static readonly EXISTS_VAL=18;
  public static readonly AND=19;
  public static readonly OR=20;
  public static readonly NOT=21;
  public static readonly ANY=22;
  public static readonly ALL=23;
  public static readonly SUM=24;
  public static readonly COUNT=25;
  public static readonly AVG=26;
  public static readonly INITIAL_CAPABILITY=27;
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
    undefined, "'.'", "'('", "')'", "','", "'<'", "'>'", "'<='", "'>='", "'='",
    "'<>'", "'-'", "'+'", "'*'", "'/'"
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "CS", "EXISTS_CS", "EXISTS_CAP", "EXISTS_VAL", "AND", "OR",
    "NOT", "ANY", "ALL", "SUM", "COUNT", "AVG", "INITIAL_CAPABILITY", "BOOL_CONSTANT",
    "TRUE", "FALSE", "VARIABLE", "SCIENTIFIC_NUMBER", "STRING_LITERAL", "WS"
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
        this.state = 47;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
          case 1:
          {
            _localctx = new BoolConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 7;
            (_localctx as BoolConstantContext)._atom = this.match(GlobalConditionsGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new BooleanVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 8;
            (_localctx as BooleanVariableContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.CS) | (1 << GlobalConditionsGrammarParser.ALL) | (1 << GlobalConditionsGrammarParser.INITIAL_CAPABILITY))) !== 0)) ) {
              (_localctx as BooleanVariableContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 9;
            this.match(GlobalConditionsGrammarParser.T__0);
            this.state = 10;
            (_localctx as BooleanVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 11;
            this.match(GlobalConditionsGrammarParser.T__0);
            this.state = 12;
            (_localctx as BooleanVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new ExistsCSContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 13;
            this.match(GlobalConditionsGrammarParser.EXISTS_CS);
            this.state = 14;
            this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 15;
            (_localctx as ExistsCSContext)._cs = this.match(GlobalConditionsGrammarParser.CS);
            this.state = 16;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;

          case 4:
          {
            _localctx = new ExistsCapContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 17;
            this.match(GlobalConditionsGrammarParser.EXISTS_CAP);
            this.state = 18;
            this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 19;
            (_localctx as ExistsCapContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.CS) | (1 << GlobalConditionsGrammarParser.ANY) | (1 << GlobalConditionsGrammarParser.INITIAL_CAPABILITY))) !== 0)) ) {
              (_localctx as ExistsCapContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 20;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 21;
            (_localctx as ExistsCapContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 22;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;

          case 5:
          {
            _localctx = new ExistsValContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 23;
            this.match(GlobalConditionsGrammarParser.EXISTS_VAL);
            this.state = 24;
            this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 25;
            (_localctx as ExistsValContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.CS) | (1 << GlobalConditionsGrammarParser.ANY) | (1 << GlobalConditionsGrammarParser.INITIAL_CAPABILITY))) !== 0)) ) {
              (_localctx as ExistsValContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 26;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 27;
            (_localctx as ExistsValContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 28;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 29;
            (_localctx as ExistsValContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 30;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 31;
            (_localctx as ExistsValContext)._value = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (GlobalConditionsGrammarParser.BOOL_CONSTANT - 28)) | (1 << (GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER - 28)) | (1 << (GlobalConditionsGrammarParser.STRING_LITERAL - 28)))) !== 0)) ) {
              (_localctx as ExistsValContext)._value = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 32;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;

          case 6:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 33;
            (_localctx as UnaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 34;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(0);
            this.state = 35;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;

          case 7:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 37;
            this.match(GlobalConditionsGrammarParser.NOT);
            this.state = 38;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(5);
          }
            break;

          case 8:
          {
            _localctx = new ArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 39;
            (_localctx as ArithmeticComparisonContext)._left = this.arithmeticExpression(0);
            this.state = 40;
            (_localctx as ArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__4) | (1 << GlobalConditionsGrammarParser.T__5) | (1 << GlobalConditionsGrammarParser.T__6) | (1 << GlobalConditionsGrammarParser.T__7) | (1 << GlobalConditionsGrammarParser.T__8) | (1 << GlobalConditionsGrammarParser.T__9))) !== 0)) ) {
              (_localctx as ArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 41;
            (_localctx as ArithmeticComparisonContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 9:
          {
            _localctx = new StringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 43;
            (_localctx as StringComparisonContext)._left = this.stringValue();
            this.state = 44;
            (_localctx as StringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__8 || _la===GlobalConditionsGrammarParser.T__9) ) {
              (_localctx as StringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 45;
            (_localctx as StringComparisonContext)._right = this.stringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 57;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 55;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 49;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 50;
                  (_localctx as BinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.AND);
                  this.state = 51;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 52;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 53;
                  (_localctx as BinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.OR);
                  this.state = 54;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 59;
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
        this.state = 79;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new ArithmeticConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 61;
            (_localctx as ArithmeticConstantContext)._atom = this.match(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case GlobalConditionsGrammarParser.CS:
          case GlobalConditionsGrammarParser.ALL:
          case GlobalConditionsGrammarParser.INITIAL_CAPABILITY:
          {
            _localctx = new ArithmeticVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 62;
            (_localctx as ArithmeticVariableContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.CS) | (1 << GlobalConditionsGrammarParser.ALL) | (1 << GlobalConditionsGrammarParser.INITIAL_CAPABILITY))) !== 0)) ) {
              (_localctx as ArithmeticVariableContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 63;
            this.match(GlobalConditionsGrammarParser.T__0);
            this.state = 64;
            (_localctx as ArithmeticVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 65;
            this.match(GlobalConditionsGrammarParser.T__0);
            this.state = 66;
            (_localctx as ArithmeticVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;
          case GlobalConditionsGrammarParser.SUM:
          case GlobalConditionsGrammarParser.COUNT:
          case GlobalConditionsGrammarParser.AVG:
          {
            _localctx = new ArithmeticFuncContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 67;
            (_localctx as ArithmeticFuncContext)._func = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.SUM) | (1 << GlobalConditionsGrammarParser.COUNT) | (1 << GlobalConditionsGrammarParser.AVG))) !== 0)) ) {
              (_localctx as ArithmeticFuncContext)._func = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 68;
            this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 69;
            (_localctx as ArithmeticFuncContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 70;
            this.match(GlobalConditionsGrammarParser.T__3);
            this.state = 71;
            (_localctx as ArithmeticFuncContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 72;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;
          case GlobalConditionsGrammarParser.T__10:
          case GlobalConditionsGrammarParser.T__11:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 73;
            (_localctx as UnaryArithmeticOpContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__10 || _la===GlobalConditionsGrammarParser.T__11) ) {
              (_localctx as UnaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 74;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(4);
          }
            break;
          case GlobalConditionsGrammarParser.T__1:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 75;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.T__1);
            this.state = 76;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(0);
            this.state = 77;
            this.match(GlobalConditionsGrammarParser.T__2);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 89;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 87;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 81;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 82;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__12 || _la===GlobalConditionsGrammarParser.T__13) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 83;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 84;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 85;
                  (_localctx as BinaryArithmeticOpContext)._op = this._input.LT(1);
                  _la = this._input.LA(1);
                  if ( !(_la===GlobalConditionsGrammarParser.T__10 || _la===GlobalConditionsGrammarParser.T__11) ) {
                    (_localctx as BinaryArithmeticOpContext)._op = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 86;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 91;
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
    let _la: number;
    try {
      this.state = 98;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GlobalConditionsGrammarParser.STRING_LITERAL:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 92;
          (_localctx as StringAtomContext)._atom = this.match(GlobalConditionsGrammarParser.STRING_LITERAL);
        }
          break;
        case GlobalConditionsGrammarParser.CS:
        case GlobalConditionsGrammarParser.ALL:
        case GlobalConditionsGrammarParser.INITIAL_CAPABILITY:
          _localctx = new StringVariableContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 93;
          (_localctx as StringVariableContext)._cs = this._input.LT(1);
          _la = this._input.LA(1);
          if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.CS) | (1 << GlobalConditionsGrammarParser.ALL) | (1 << GlobalConditionsGrammarParser.INITIAL_CAPABILITY))) !== 0)) ) {
            (_localctx as StringVariableContext)._cs = this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 94;
          this.match(GlobalConditionsGrammarParser.T__0);
          this.state = 95;
          (_localctx as StringVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
          this.state = 96;
          this.match(GlobalConditionsGrammarParser.T__0);
          this.state = 97;
          (_localctx as StringVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
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
    "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03$g\x04\x02\t\x02"+
    "\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03"+
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05"+
    "\x022\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02:\n"+
    "\x02\f\x02\x0E\x02=\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03R\n\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x07\x03Z\n\x03\f\x03\x0E\x03]\v\x03\x03\x04"+
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04e\n\x04\x03\x04\x02\x02"+
    "\x04\x02\x04\x05\x02\x02\x04\x02\x06\x02\x02\n\x05\x02\x11\x11\x19\x19"+
    "\x1D\x1D\x05\x02\x11\x11\x18\x18\x1D\x1D\x04\x02\x1E\x1E\"#\x03\x02\x07"+
    "\f\x03\x02\v\f\x03\x02\x1A\x1C\x03\x02\r\x0E\x03\x02\x0F\x10t\x021\x03"+
    "\x02\x02\x02\x04Q\x03\x02\x02\x02\x06d\x03\x02\x02\x02\b\t\b\x02\x01\x02"+
    "\t2\x07\x1E\x02\x02\n\v\t\x02\x02\x02\v\f\x07\x03\x02\x02\f\r\x07!\x02"+
    "\x02\r\x0E\x07\x03\x02\x02\x0E2\x07!\x02\x02\x0F\x10\x07\x12\x02\x02\x10"+
    "\x11\x07\x04\x02\x02\x11\x12\x07\x11\x02\x02\x122\x07\x05\x02\x02\x13"+
    "\x14\x07\x13\x02\x02\x14\x15\x07\x04\x02\x02\x15\x16\t\x03\x02\x02\x16"+
    "\x17\x07\x06\x02\x02\x17\x18\x07!\x02\x02\x182\x07\x05\x02\x02\x19\x1A"+
    "\x07\x14\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x1C\t\x03\x02\x02\x1C\x1D"+
    "\x07\x06\x02\x02\x1D\x1E\x07!\x02\x02\x1E\x1F\x07\x06\x02\x02\x1F \x07"+
    "!\x02\x02 !\x07\x06\x02\x02!\"\t\x04\x02\x02\"2\x07\x05\x02\x02#$\x07"+
    "\x04\x02\x02$%\x05\x02\x02\x02%&\x07\x05\x02\x02&2\x03\x02\x02\x02\'("+
    "\x07\x17\x02\x02(2\x05\x02\x02\x07)*\x05\x04\x03\x02*+\t\x05\x02\x02+"+
    ",\x05\x04\x03\x02,2\x03\x02\x02\x02-.\x05\x06\x04\x02./\t\x06\x02\x02"+
    "/0\x05\x06\x04\x0202\x03\x02\x02\x021\b\x03\x02\x02\x021\n\x03\x02\x02"+
    "\x021\x0F\x03\x02\x02\x021\x13\x03\x02\x02\x021\x19\x03\x02\x02\x021#"+
    "\x03\x02\x02\x021\'\x03\x02\x02\x021)\x03\x02\x02\x021-\x03\x02\x02\x02"+
    "2;\x03\x02\x02\x0234\f\x04\x02\x0245\x07\x15\x02\x025:\x05\x02\x02\x05"+
    "67\f\x03\x02\x0278\x07\x16\x02\x028:\x05\x02\x02\x0493\x03\x02\x02\x02"+
    "96\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02"+
    "<\x03\x03\x02\x02\x02=;\x03\x02\x02\x02>?\b\x03\x01\x02?R\x07\"\x02\x02"+
    "@A\t\x02\x02\x02AB\x07\x03\x02\x02BC\x07!\x02\x02CD\x07\x03\x02\x02DR"+
    "\x07!\x02\x02EF\t\x07\x02\x02FG\x07\x04\x02\x02GH\x07!\x02\x02HI\x07\x06"+
    "\x02\x02IJ\x07!\x02\x02JR\x07\x05\x02\x02KL\t\b\x02\x02LR\x05\x04\x03"+
    "\x06MN\x07\x04\x02\x02NO\x05\x04\x03\x02OP\x07\x05\x02\x02PR\x03\x02\x02"+
    "\x02Q>\x03\x02\x02\x02Q@\x03\x02\x02\x02QE\x03\x02\x02\x02QK\x03\x02\x02"+
    "\x02QM\x03\x02\x02\x02R[\x03\x02\x02\x02ST\f\x04\x02\x02TU\t\t\x02\x02"+
    "UZ\x05\x04\x03\x05VW\f\x03\x02\x02WX\t\b\x02\x02XZ\x05\x04\x03\x04YS\x03"+
    "\x02\x02\x02YV\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\"+
    "\x03\x02\x02\x02\\\x05\x03\x02\x02\x02][\x03\x02\x02\x02^e\x07#\x02\x02"+
    "_`\t\x02\x02\x02`a\x07\x03\x02\x02ab\x07!\x02\x02bc\x07\x03\x02\x02ce"+
    "\x07!\x02\x02d^\x03\x02\x02\x02d_\x03\x02\x02\x02e\x07\x03\x02\x02\x02"+
    "\t19;QY[d";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GlobalConditionsGrammarParser.__ATN) {
      GlobalConditionsGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GlobalConditionsGrammarParser._serializedATN));
    }

    return GlobalConditionsGrammarParser.__ATN;
  }

}

