// Generated from src/assets/grammars/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


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
export class RightMVVArithCompContext extends BooleanExpressionContext {
	public _left: ArithmeticExpressionContext;
	public _op: Token;
	public _right: MultiValueVariableContext;
	public arithmeticExpression(): ArithmeticExpressionContext {
		return this.getRuleContext(0, ArithmeticExpressionContext);
	}
	public multiValueVariable(): MultiValueVariableContext {
		return this.getRuleContext(0, MultiValueVariableContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterRightMVVArithComp) listener.enterRightMVVArithComp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitRightMVVArithComp) listener.exitRightMVVArithComp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitRightMVVArithComp) return visitor.visitRightMVVArithComp(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolVariableContext extends BooleanExpressionContext {
	public _cap: Token;
	public _property: Token;
	public CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.CS, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.DOT);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.DOT, i);
		}
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBoolVariable) listener.enterBoolVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBoolVariable) listener.exitBoolVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitBoolVariable) return visitor.visitBoolVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class ExistsCapContext extends BooleanExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public EXISTS_CAP(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_CAP, 0); }
	public LPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.LPAR, 0); }
	public COMMA(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.COMMA, 0); }
	public RPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.RPAR, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.VARIABLE, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ANY, 0); }
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
export class LeftMVVArithCompContext extends BooleanExpressionContext {
	public _left: MultiValueVariableContext;
	public _op: Token;
	public _right: ArithmeticExpressionContext;
	public multiValueVariable(): MultiValueVariableContext {
		return this.getRuleContext(0, MultiValueVariableContext);
	}
	public arithmeticExpression(): ArithmeticExpressionContext {
		return this.getRuleContext(0, ArithmeticExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterLeftMVVArithComp) listener.enterLeftMVVArithComp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitLeftMVVArithComp) listener.exitLeftMVVArithComp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitLeftMVVArithComp) return visitor.visitLeftMVVArithComp(this);
		else return visitor.visitChildren(this);
	}
}
export class ExistsValContext extends BooleanExpressionContext {
	public _cs: Token;
	public _cap: Token;
	public _property: Token;
	public _value: Token;
	public EXISTS_VAL(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_VAL, 0); }
	public LPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.LPAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.COMMA);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.COMMA, i);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.RPAR, 0); }
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
export class LeftMVVStringCompContext extends BooleanExpressionContext {
	public _left: MultiValueVariableContext;
	public _op: Token;
	public _right: StringValueContext;
	public multiValueVariable(): MultiValueVariableContext {
		return this.getRuleContext(0, MultiValueVariableContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterLeftMVVStringComp) listener.enterLeftMVVStringComp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitLeftMVVStringComp) listener.exitLeftMVVStringComp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitLeftMVVStringComp) return visitor.visitLeftMVVStringComp(this);
		else return visitor.visitChildren(this);
	}
}
export class ExistsCSContext extends BooleanExpressionContext {
	public _cs: Token;
	public EXISTS_CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.EXISTS_CS, 0); }
	public LPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.LPAR, 0); }
	public RPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.RPAR, 0); }
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
export class RightMVVStringCompContext extends BooleanExpressionContext {
	public _left: StringValueContext;
	public _op: Token;
	public _right: MultiValueVariableContext;
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public multiValueVariable(): MultiValueVariableContext {
		return this.getRuleContext(0, MultiValueVariableContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterRightMVVStringComp) listener.enterRightMVVStringComp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitRightMVVStringComp) listener.exitRightMVVStringComp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitRightMVVStringComp) return visitor.visitRightMVVStringComp(this);
		else return visitor.visitChildren(this);
	}
}
export class BoolMVVContext extends BooleanExpressionContext {
	public multiValueVariable(): MultiValueVariableContext {
		return this.getRuleContext(0, MultiValueVariableContext);
	}
	constructor(ctx: BooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterBoolMVV) listener.enterBoolMVV(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitBoolMVV) listener.exitBoolMVV(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitBoolMVV) return visitor.visitBoolMVV(this);
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
	public MULT_DIV(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.MULT_DIV, 0); }
	public SUM_MINUS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SUM_MINUS, 0); }
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
	public _cap: Token;
	public _property: Token;
	public CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.CS, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.DOT);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.DOT, i);
		}
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
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
	public LPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.LPAR, 0); }
	public DOT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.DOT, 0); }
	public RPAR(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.RPAR, 0); }
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
	public SUM_MINUS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SUM_MINUS, 0); }
	public arithmeticExpression(): ArithmeticExpressionContext {
		return this.getRuleContext(0, ArithmeticExpressionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.RPAR, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.LPAR, 0); }
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
	public _cap: Token;
	public _property: Token;
	public CS(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.CS, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.DOT);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.DOT, i);
		}
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
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


export class MultiValueVariableContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_multiValueVariable; }

	public copyFrom(ctx: MultiValueVariableContext): void {
		super.copyFrom(ctx);
	}
}
export class MvvContext extends MultiValueVariableContext {
	public _accessor: Token;
	public _capability: Token;
	public _property: Token;
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.DOT);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.DOT, i);
		}
	}
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
	public ALL(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.ALL, 0); }
	public LBRAC(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.LBRAC, 0); }
	public fBooleanExpression(): FBooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, FBooleanExpressionContext);
	}
	public RBRAC(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.RBRAC, 0); }
	constructor(ctx: MultiValueVariableContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterMvv) listener.enterMvv(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitMvv) listener.exitMvv(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitMvv) return visitor.visitMvv(this);
		else return visitor.visitChildren(this);
	}
}


export class FBooleanExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_fBooleanExpression; }

	public copyFrom(ctx: FBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FBinaryBoolOpContext extends FBooleanExpressionContext {
	public _left: FBooleanExpressionContext;
	public _op: Token;
	public _right: FBooleanExpressionContext;
	public fBooleanExpression(): FBooleanExpressionContext[];
	public fBooleanExpression(i: number): FBooleanExpressionContext;
	public fBooleanExpression(i?: number): FBooleanExpressionContext | FBooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FBooleanExpressionContext);
		} else {
			return this.getRuleContext(i, FBooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.OR, 0); }
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFBinaryBoolOp) listener.enterFBinaryBoolOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFBinaryBoolOp) listener.exitFBinaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFBinaryBoolOp) return visitor.visitFBinaryBoolOp(this);
		else return visitor.visitChildren(this);
	}
}
export class FArithmeticComparisonContext extends FBooleanExpressionContext {
	public _left: FArithmeticExpressionContext;
	public _op: Token;
	public _right: FArithmeticExpressionContext;
	public fArithmeticExpression(): FArithmeticExpressionContext[];
	public fArithmeticExpression(i: number): FArithmeticExpressionContext;
	public fArithmeticExpression(i?: number): FArithmeticExpressionContext | FArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, FArithmeticExpressionContext);
		}
	}
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFArithmeticComparison) listener.enterFArithmeticComparison(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFArithmeticComparison) listener.exitFArithmeticComparison(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFArithmeticComparison) return visitor.visitFArithmeticComparison(this);
		else return visitor.visitChildren(this);
	}
}
export class FBoolConstantContext extends FBooleanExpressionContext {
	public _atom: Token;
	public BOOL_CONSTANT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.BOOL_CONSTANT, 0); }
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFBoolConstant) listener.enterFBoolConstant(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFBoolConstant) listener.exitFBoolConstant(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFBoolConstant) return visitor.visitFBoolConstant(this);
		else return visitor.visitChildren(this);
	}
}
export class FUnaryBoolOpContext extends FBooleanExpressionContext {
	public _op: Token;
	public _exp: FBooleanExpressionContext;
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.RPAR, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.LPAR, 0); }
	public fBooleanExpression(): FBooleanExpressionContext {
		return this.getRuleContext(0, FBooleanExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.NOT, 0); }
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFUnaryBoolOp) listener.enterFUnaryBoolOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFUnaryBoolOp) listener.exitFUnaryBoolOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFUnaryBoolOp) return visitor.visitFUnaryBoolOp(this);
		else return visitor.visitChildren(this);
	}
}
export class FBoolVariableContext extends FBooleanExpressionContext {
	public _cap: Token;
	public _property: Token;
	public DOT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.DOT, 0); }
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFBoolVariable) listener.enterFBoolVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFBoolVariable) listener.exitFBoolVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFBoolVariable) return visitor.visitFBoolVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class FStringComparisonContext extends FBooleanExpressionContext {
	public _left: FStringValueContext;
	public _op: Token;
	public _right: FStringValueContext;
	public fStringValue(): FStringValueContext[];
	public fStringValue(i: number): FStringValueContext;
	public fStringValue(i?: number): FStringValueContext | FStringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FStringValueContext);
		} else {
			return this.getRuleContext(i, FStringValueContext);
		}
	}
	constructor(ctx: FBooleanExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFStringComparison) listener.enterFStringComparison(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFStringComparison) listener.exitFStringComparison(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFStringComparison) return visitor.visitFStringComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class FArithmeticExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_fArithmeticExpression; }

	public copyFrom(ctx: FArithmeticExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FArithmeticConstantContext extends FArithmeticExpressionContext {
	public _atom: Token;
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER, 0); }
	constructor(ctx: FArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFArithmeticConstant) listener.enterFArithmeticConstant(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFArithmeticConstant) listener.exitFArithmeticConstant(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFArithmeticConstant) return visitor.visitFArithmeticConstant(this);
		else return visitor.visitChildren(this);
	}
}
export class FBinaryArithmeticOpContext extends FArithmeticExpressionContext {
	public _left: FArithmeticExpressionContext;
	public _op: Token;
	public _right: FArithmeticExpressionContext;
	public fArithmeticExpression(): FArithmeticExpressionContext[];
	public fArithmeticExpression(i: number): FArithmeticExpressionContext;
	public fArithmeticExpression(i?: number): FArithmeticExpressionContext | FArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, FArithmeticExpressionContext);
		}
	}
	public MULT_DIV(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.MULT_DIV, 0); }
	public SUM_MINUS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SUM_MINUS, 0); }
	constructor(ctx: FArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFBinaryArithmeticOp) listener.enterFBinaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFBinaryArithmeticOp) listener.exitFBinaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFBinaryArithmeticOp) return visitor.visitFBinaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}
export class FUnaryArithmeticOpContext extends FArithmeticExpressionContext {
	public _op: Token;
	public _exp: FArithmeticExpressionContext;
	public SUM_MINUS(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.SUM_MINUS, 0); }
	public fArithmeticExpression(): FArithmeticExpressionContext {
		return this.getRuleContext(0, FArithmeticExpressionContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.RPAR, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(GlobalConditionsGrammarParser.LPAR, 0); }
	constructor(ctx: FArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFUnaryArithmeticOp) listener.enterFUnaryArithmeticOp(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFUnaryArithmeticOp) listener.exitFUnaryArithmeticOp(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFUnaryArithmeticOp) return visitor.visitFUnaryArithmeticOp(this);
		else return visitor.visitChildren(this);
	}
}
export class FArithmeticVariableContext extends FArithmeticExpressionContext {
	public _cap: Token;
	public _property: Token;
	public DOT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.DOT, 0); }
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	constructor(ctx: FArithmeticExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFArithmeticVariable) listener.enterFArithmeticVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFArithmeticVariable) listener.exitFArithmeticVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFArithmeticVariable) return visitor.visitFArithmeticVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class FStringValueContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return GlobalConditionsGrammarParser.RULE_fStringValue; }

	public copyFrom(ctx: FStringValueContext): void {
		super.copyFrom(ctx);
	}
}
export class FStringVariableContext extends FStringValueContext {
	public _cap: Token;
	public _property: Token;
	public DOT(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.DOT, 0); }
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GlobalConditionsGrammarParser.VARIABLE);
		} else {
			return this.getToken(GlobalConditionsGrammarParser.VARIABLE, i);
		}
	}
	constructor(ctx: FStringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFStringVariable) listener.enterFStringVariable(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFStringVariable) listener.exitFStringVariable(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFStringVariable) return visitor.visitFStringVariable(this);
		else return visitor.visitChildren(this);
	}
}
export class FStringAtomContext extends FStringValueContext {
	public _atom: Token;
	public STRING_LITERAL(): TerminalNode { return this.getToken(GlobalConditionsGrammarParser.STRING_LITERAL, 0); }
	constructor(ctx: FStringValueContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.enterFStringAtom) listener.enterFStringAtom(this);
	}
	@Override
	public exitRule(listener: GlobalConditionsGrammarListener): void {
		if (listener.exitFStringAtom) listener.exitFStringAtom(this);
	}
	@Override
	public accept<Result>(visitor: GlobalConditionsGrammarVisitor<Result>): Result {
		if (visitor.visitFStringAtom) return visitor.visitFStringAtom(this);
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
  public static readonly AND=7;
  public static readonly OR=8;
  public static readonly NOT=9;
  public static readonly CS=10;
  public static readonly INITIAL_CAPABILITY=11;
  public static readonly ANY=12;
  public static readonly ALL=13;
  public static readonly EXISTS_CS=14;
  public static readonly EXISTS_CAP=15;
  public static readonly EXISTS_VAL=16;
  public static readonly SUM=17;
  public static readonly COUNT=18;
  public static readonly AVG=19;
  public static readonly BOOL_CONSTANT=20;
  public static readonly TRUE=21;
  public static readonly FALSE=22;
  public static readonly VARIABLE=23;
  public static readonly STRING_LITERAL=24;
  public static readonly DOT=25;
  public static readonly COMMA=26;
  public static readonly LPAR=27;
  public static readonly RPAR=28;
  public static readonly LBRAC=29;
  public static readonly RBRAC=30;
  public static readonly SUM_MINUS=31;
  public static readonly MULT_DIV=32;
  public static readonly SCIENTIFIC_NUMBER=33;
  public static readonly WS=34;
  public static readonly RULE_booleanExpression = 0;
  public static readonly RULE_arithmeticExpression = 1;
  public static readonly RULE_stringValue = 2;
  public static readonly RULE_multiValueVariable = 3;
  public static readonly RULE_fBooleanExpression = 4;
  public static readonly RULE_fArithmeticExpression = 5;
  public static readonly RULE_fStringValue = 6;
  public static readonly ruleNames: string[] = [
    "booleanExpression", "arithmeticExpression", "stringValue", "multiValueVariable",
    "fBooleanExpression", "fArithmeticExpression", "fStringValue"
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined, "'<>'", "'>='", "'>'", "'<='", "'<'", "'='", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "'.'", "','", "'('", "')'", "'['", "']'"
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "AND", "OR", "NOT", "CS", "INITIAL_CAPABILITY", "ANY", "ALL", "EXISTS_CS",
    "EXISTS_CAP", "EXISTS_VAL", "SUM", "COUNT", "AVG", "BOOL_CONSTANT", "TRUE",
    "FALSE", "VARIABLE", "STRING_LITERAL", "DOT", "COMMA", "LPAR", "RPAR",
    "LBRAC", "RBRAC", "SUM_MINUS", "MULT_DIV", "SCIENTIFIC_NUMBER", "WS"
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
        this.state = 72;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
          case 1:
          {
            _localctx = new BoolConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 15;
            (_localctx as BoolConstantContext)._atom = this.match(GlobalConditionsGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new BoolVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 16;
            this.match(GlobalConditionsGrammarParser.CS);
            this.state = 17;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 18;
            (_localctx as BoolVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 19;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 20;
            (_localctx as BoolVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new BoolMVVContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 21;
            this.multiValueVariable();
          }
            break;

          case 4:
          {
            _localctx = new ExistsCSContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 22;
            this.match(GlobalConditionsGrammarParser.EXISTS_CS);
            this.state = 23;
            this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 24;
            (_localctx as ExistsCSContext)._cs = this.match(GlobalConditionsGrammarParser.CS);
            this.state = 25;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;

          case 5:
          {
            _localctx = new ExistsCapContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 26;
            this.match(GlobalConditionsGrammarParser.EXISTS_CAP);
            this.state = 27;
            this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 28;
            (_localctx as ExistsCapContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.CS || _la===GlobalConditionsGrammarParser.ANY) ) {
              (_localctx as ExistsCapContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 29;
            this.match(GlobalConditionsGrammarParser.COMMA);
            this.state = 30;
            (_localctx as ExistsCapContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 31;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;

          case 6:
          {
            _localctx = new ExistsValContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 32;
            this.match(GlobalConditionsGrammarParser.EXISTS_VAL);
            this.state = 33;
            this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 34;
            (_localctx as ExistsValContext)._cs = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.CS || _la===GlobalConditionsGrammarParser.ANY) ) {
              (_localctx as ExistsValContext)._cs = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 35;
            this.match(GlobalConditionsGrammarParser.COMMA);
            this.state = 36;
            (_localctx as ExistsValContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 37;
            this.match(GlobalConditionsGrammarParser.COMMA);
            this.state = 38;
            (_localctx as ExistsValContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 39;
            this.match(GlobalConditionsGrammarParser.COMMA);
            this.state = 40;
            (_localctx as ExistsValContext)._value = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (GlobalConditionsGrammarParser.BOOL_CONSTANT - 20)) | (1 << (GlobalConditionsGrammarParser.STRING_LITERAL - 20)) | (1 << (GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER - 20)))) !== 0)) ) {
              (_localctx as ExistsValContext)._value = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 41;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;

          case 7:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 42;
            (_localctx as UnaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 43;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(0);
            this.state = 44;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;

          case 8:
          {
            _localctx = new UnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 46;
            this.match(GlobalConditionsGrammarParser.NOT);
            this.state = 47;
            (_localctx as UnaryBoolOpContext)._exp = this.booleanExpression(9);
          }
            break;

          case 9:
          {
            _localctx = new LeftMVVArithCompContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 48;
            (_localctx as LeftMVVArithCompContext)._left = this.multiValueVariable();
            this.state = 49;
            (_localctx as LeftMVVArithCompContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__0) | (1 << GlobalConditionsGrammarParser.T__1) | (1 << GlobalConditionsGrammarParser.T__2) | (1 << GlobalConditionsGrammarParser.T__3) | (1 << GlobalConditionsGrammarParser.T__4) | (1 << GlobalConditionsGrammarParser.T__5))) !== 0)) ) {
              (_localctx as LeftMVVArithCompContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 50;
            (_localctx as LeftMVVArithCompContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 10:
          {
            _localctx = new RightMVVArithCompContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 52;
            (_localctx as RightMVVArithCompContext)._left = this.arithmeticExpression(0);
            this.state = 53;
            (_localctx as RightMVVArithCompContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__0) | (1 << GlobalConditionsGrammarParser.T__1) | (1 << GlobalConditionsGrammarParser.T__2) | (1 << GlobalConditionsGrammarParser.T__3) | (1 << GlobalConditionsGrammarParser.T__4) | (1 << GlobalConditionsGrammarParser.T__5))) !== 0)) ) {
              (_localctx as RightMVVArithCompContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 54;
            (_localctx as RightMVVArithCompContext)._right = this.multiValueVariable();
          }
            break;

          case 11:
          {
            _localctx = new ArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 56;
            (_localctx as ArithmeticComparisonContext)._left = this.arithmeticExpression(0);
            this.state = 57;
            (_localctx as ArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__0) | (1 << GlobalConditionsGrammarParser.T__1) | (1 << GlobalConditionsGrammarParser.T__2) | (1 << GlobalConditionsGrammarParser.T__3) | (1 << GlobalConditionsGrammarParser.T__4) | (1 << GlobalConditionsGrammarParser.T__5))) !== 0)) ) {
              (_localctx as ArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 58;
            (_localctx as ArithmeticComparisonContext)._right = this.arithmeticExpression(0);
          }
            break;

          case 12:
          {
            _localctx = new LeftMVVStringCompContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 60;
            (_localctx as LeftMVVStringCompContext)._left = this.multiValueVariable();
            this.state = 61;
            (_localctx as LeftMVVStringCompContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__0 || _la===GlobalConditionsGrammarParser.T__5) ) {
              (_localctx as LeftMVVStringCompContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 62;
            (_localctx as LeftMVVStringCompContext)._right = this.stringValue();
          }
            break;

          case 13:
          {
            _localctx = new RightMVVStringCompContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 64;
            (_localctx as RightMVVStringCompContext)._left = this.stringValue();
            this.state = 65;
            (_localctx as RightMVVStringCompContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__0 || _la===GlobalConditionsGrammarParser.T__5) ) {
              (_localctx as RightMVVStringCompContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 66;
            (_localctx as RightMVVStringCompContext)._right = this.multiValueVariable();
          }
            break;

          case 14:
          {
            _localctx = new StringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 68;
            (_localctx as StringComparisonContext)._left = this.stringValue();
            this.state = 69;
            (_localctx as StringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__0 || _la===GlobalConditionsGrammarParser.T__5) ) {
              (_localctx as StringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 70;
            (_localctx as StringComparisonContext)._right = this.stringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 82;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 80;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 74;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 75;
                  (_localctx as BinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.AND);
                  this.state = 76;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryBoolOpContext(new BooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_booleanExpression);
                  this.state = 77;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 78;
                  (_localctx as BinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.OR);
                  this.state = 79;
                  (_localctx as BinaryBoolOpContext)._right = this.booleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 84;
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
        this.state = 104;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new ArithmeticConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 86;
            (_localctx as ArithmeticConstantContext)._atom = this.match(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case GlobalConditionsGrammarParser.CS:
          {
            _localctx = new ArithmeticVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 87;
            this.match(GlobalConditionsGrammarParser.CS);
            this.state = 88;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 89;
            (_localctx as ArithmeticVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 90;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 91;
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
            this.state = 92;
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
            this.state = 93;
            this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 94;
            (_localctx as ArithmeticFuncContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 95;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 96;
            (_localctx as ArithmeticFuncContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 97;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;
          case GlobalConditionsGrammarParser.SUM_MINUS:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 98;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.SUM_MINUS);
            this.state = 99;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(4);
          }
            break;
          case GlobalConditionsGrammarParser.LPAR:
          {
            _localctx = new UnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 100;
            (_localctx as UnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 101;
            (_localctx as UnaryArithmeticOpContext)._exp = this.arithmeticExpression(0);
            this.state = 102;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 112;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
                case 1:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 106;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 107;
                  (_localctx as BinaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.MULT_DIV);
                  this.state = 108;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new BinaryArithmeticOpContext(new ArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as BinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_arithmeticExpression);
                  this.state = 109;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 110;
                  (_localctx as BinaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.SUM_MINUS);
                  this.state = 111;
                  (_localctx as BinaryArithmeticOpContext)._right = this.arithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 116;
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
      this.state = 123;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GlobalConditionsGrammarParser.STRING_LITERAL:
          _localctx = new StringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 117;
          (_localctx as StringAtomContext)._atom = this.match(GlobalConditionsGrammarParser.STRING_LITERAL);
        }
          break;
        case GlobalConditionsGrammarParser.CS:
          _localctx = new StringVariableContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 118;
          this.match(GlobalConditionsGrammarParser.CS);
          this.state = 119;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 120;
          (_localctx as StringVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
          this.state = 121;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 122;
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
  @RuleVersion(0)
  public multiValueVariable(): MultiValueVariableContext {
    let _localctx: MultiValueVariableContext = new MultiValueVariableContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, GlobalConditionsGrammarParser.RULE_multiValueVariable);
    let _la: number;
    try {
      this.state = 139;
      this._errHandler.sync(this);
      switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
        case 1:
          _localctx = new MvvContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 125;
          (_localctx as MvvContext)._accessor = this._input.LT(1);
          _la = this._input.LA(1);
          if ( !(_la===GlobalConditionsGrammarParser.ANY || _la===GlobalConditionsGrammarParser.ALL) ) {
            (_localctx as MvvContext)._accessor = this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 126;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 127;
          (_localctx as MvvContext)._capability = this.match(GlobalConditionsGrammarParser.VARIABLE);
          this.state = 128;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 129;
          (_localctx as MvvContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
        }
          break;

        case 2:
          _localctx = new MvvContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 130;
          (_localctx as MvvContext)._accessor = this._input.LT(1);
          _la = this._input.LA(1);
          if ( !(_la===GlobalConditionsGrammarParser.ANY || _la===GlobalConditionsGrammarParser.ALL) ) {
            (_localctx as MvvContext)._accessor = this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 131;
          this.match(GlobalConditionsGrammarParser.LBRAC);
          this.state = 132;
          this.fBooleanExpression(0);
          this.state = 133;
          this.match(GlobalConditionsGrammarParser.RBRAC);
          this.state = 134;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 135;
          (_localctx as MvvContext)._capability = this.match(GlobalConditionsGrammarParser.VARIABLE);
          this.state = 136;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 137;
          (_localctx as MvvContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
        }
          break;
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

  public fBooleanExpression(): FBooleanExpressionContext;
  public fBooleanExpression(_p: number): FBooleanExpressionContext;
  @RuleVersion(0)
  public fBooleanExpression(_p?: number): FBooleanExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: FBooleanExpressionContext = new FBooleanExpressionContext(this._ctx, _parentState);
    let _prevctx: FBooleanExpressionContext = _localctx;
    let _startState: number = 8;
    this.enterRecursionRule(_localctx, 8, GlobalConditionsGrammarParser.RULE_fBooleanExpression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 160;
        this._errHandler.sync(this);
        switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
          case 1:
          {
            _localctx = new FBoolConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 142;
            (_localctx as FBoolConstantContext)._atom = this.match(GlobalConditionsGrammarParser.BOOL_CONSTANT);
          }
            break;

          case 2:
          {
            _localctx = new FBoolVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 143;
            (_localctx as FBoolVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 144;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 145;
            (_localctx as FBoolVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;

          case 3:
          {
            _localctx = new FUnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 146;
            (_localctx as FUnaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 147;
            (_localctx as FUnaryBoolOpContext)._exp = this.fBooleanExpression(0);
            this.state = 148;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;

          case 4:
          {
            _localctx = new FUnaryBoolOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 150;
            this.match(GlobalConditionsGrammarParser.NOT);
            this.state = 151;
            (_localctx as FUnaryBoolOpContext)._exp = this.fBooleanExpression(5);
          }
            break;

          case 5:
          {
            _localctx = new FArithmeticComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 152;
            (_localctx as FArithmeticComparisonContext)._left = this.fArithmeticExpression(0);
            this.state = 153;
            (_localctx as FArithmeticComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GlobalConditionsGrammarParser.T__0) | (1 << GlobalConditionsGrammarParser.T__1) | (1 << GlobalConditionsGrammarParser.T__2) | (1 << GlobalConditionsGrammarParser.T__3) | (1 << GlobalConditionsGrammarParser.T__4) | (1 << GlobalConditionsGrammarParser.T__5))) !== 0)) ) {
              (_localctx as FArithmeticComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 154;
            (_localctx as FArithmeticComparisonContext)._right = this.fArithmeticExpression(0);
          }
            break;

          case 6:
          {
            _localctx = new FStringComparisonContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 156;
            (_localctx as FStringComparisonContext)._left = this.fStringValue();
            this.state = 157;
            (_localctx as FStringComparisonContext)._op = this._input.LT(1);
            _la = this._input.LA(1);
            if ( !(_la===GlobalConditionsGrammarParser.T__0 || _la===GlobalConditionsGrammarParser.T__5) ) {
              (_localctx as FStringComparisonContext)._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 158;
            (_localctx as FStringComparisonContext)._right = this.fStringValue();
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 170;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 168;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
                case 1:
                {
                  _localctx = new FBinaryBoolOpContext(new FBooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as FBinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_fBooleanExpression);
                  this.state = 162;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 163;
                  (_localctx as FBinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.AND);
                  this.state = 164;
                  (_localctx as FBinaryBoolOpContext)._right = this.fBooleanExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new FBinaryBoolOpContext(new FBooleanExpressionContext(_parentctx, _parentState));
                  (_localctx as FBinaryBoolOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_fBooleanExpression);
                  this.state = 165;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 166;
                  (_localctx as FBinaryBoolOpContext)._op = this.match(GlobalConditionsGrammarParser.OR);
                  this.state = 167;
                  (_localctx as FBinaryBoolOpContext)._right = this.fBooleanExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 172;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
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

  public fArithmeticExpression(): FArithmeticExpressionContext;
  public fArithmeticExpression(_p: number): FArithmeticExpressionContext;
  @RuleVersion(0)
  public fArithmeticExpression(_p?: number): FArithmeticExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: FArithmeticExpressionContext = new FArithmeticExpressionContext(this._ctx, _parentState);
    let _prevctx: FArithmeticExpressionContext = _localctx;
    let _startState: number = 10;
    this.enterRecursionRule(_localctx, 10, GlobalConditionsGrammarParser.RULE_fArithmeticExpression, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 184;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER:
          {
            _localctx = new FArithmeticConstantContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 174;
            (_localctx as FArithmeticConstantContext)._atom = this.match(GlobalConditionsGrammarParser.SCIENTIFIC_NUMBER);
          }
            break;
          case GlobalConditionsGrammarParser.VARIABLE:
          {
            _localctx = new FArithmeticVariableContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 175;
            (_localctx as FArithmeticVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
            this.state = 176;
            this.match(GlobalConditionsGrammarParser.DOT);
            this.state = 177;
            (_localctx as FArithmeticVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
          }
            break;
          case GlobalConditionsGrammarParser.SUM_MINUS:
          {
            _localctx = new FUnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 178;
            (_localctx as FUnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.SUM_MINUS);
            this.state = 179;
            (_localctx as FUnaryArithmeticOpContext)._exp = this.fArithmeticExpression(4);
          }
            break;
          case GlobalConditionsGrammarParser.LPAR:
          {
            _localctx = new FUnaryArithmeticOpContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 180;
            (_localctx as FUnaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.LPAR);
            this.state = 181;
            (_localctx as FUnaryArithmeticOpContext)._exp = this.fArithmeticExpression(0);
            this.state = 182;
            this.match(GlobalConditionsGrammarParser.RPAR);
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 194;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
        while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
          if ( _alt===1 ) {
            if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 192;
              this._errHandler.sync(this);
              switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
                case 1:
                {
                  _localctx = new FBinaryArithmeticOpContext(new FArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as FBinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_fArithmeticExpression);
                  this.state = 186;
                  if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                  this.state = 187;
                  (_localctx as FBinaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.MULT_DIV);
                  this.state = 188;
                  (_localctx as FBinaryArithmeticOpContext)._right = this.fArithmeticExpression(3);
                }
                  break;

                case 2:
                {
                  _localctx = new FBinaryArithmeticOpContext(new FArithmeticExpressionContext(_parentctx, _parentState));
                  (_localctx as FBinaryArithmeticOpContext)._left = _prevctx;
                  this.pushNewRecursionContext(_localctx, _startState, GlobalConditionsGrammarParser.RULE_fArithmeticExpression);
                  this.state = 189;
                  if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                  this.state = 190;
                  (_localctx as FBinaryArithmeticOpContext)._op = this.match(GlobalConditionsGrammarParser.SUM_MINUS);
                  this.state = 191;
                  (_localctx as FBinaryArithmeticOpContext)._right = this.fArithmeticExpression(2);
                }
                  break;
              }
            }
          }
          this.state = 196;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
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
  public fStringValue(): FStringValueContext {
    let _localctx: FStringValueContext = new FStringValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, GlobalConditionsGrammarParser.RULE_fStringValue);
    try {
      this.state = 201;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GlobalConditionsGrammarParser.STRING_LITERAL:
          _localctx = new FStringAtomContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 197;
          (_localctx as FStringAtomContext)._atom = this.match(GlobalConditionsGrammarParser.STRING_LITERAL);
        }
          break;
        case GlobalConditionsGrammarParser.VARIABLE:
          _localctx = new FStringVariableContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 198;
          (_localctx as FStringVariableContext)._cap = this.match(GlobalConditionsGrammarParser.VARIABLE);
          this.state = 199;
          this.match(GlobalConditionsGrammarParser.DOT);
          this.state = 200;
          (_localctx as FStringVariableContext)._property = this.match(GlobalConditionsGrammarParser.VARIABLE);
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

      case 4:
        return this.fBooleanExpression_sempred(_localctx as FBooleanExpressionContext, predIndex);

      case 5:
        return this.fArithmeticExpression_sempred(_localctx as FArithmeticExpressionContext, predIndex);
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
  private fBooleanExpression_sempred(_localctx: FBooleanExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 2);

      case 5:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private fArithmeticExpression_sempred(_localctx: FArithmeticExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 2);

      case 7:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03$\xCE\x04\x02"+
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
    "\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02K\n\x02\x03\x02"+
    "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02S\n\x02\f\x02\x0E\x02"+
    "V\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x03\x03\x05\x03k\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
    "\x03\x03\x07\x03s\n\x03\f\x03\x0E\x03v\v\x03\x03\x04\x03\x04\x03\x04\x03"+
    "\x04\x03\x04\x03\x04\x05\x04~\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03"+
    "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03"+
    "\x05\x05\x05\x8E\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
    "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06\x03\x06\x03"+
    "\x06\x03\x06\x03\x06\x03\x06\x07\x06\xAB\n\x06\f\x06\x0E\x06\xAE\v\x06"+
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
    "\x03\x07\x03\x07\x05\x07\xBB\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03"+
    "\x07\x03\x07\x07\x07\xC3\n\x07\f\x07\x0E\x07\xC6\v\x07\x03\b\x03\b\x03"+
    "\b\x03\b\x05\b\xCC\n\b\x03\b\x02\x02\x06\x02\x04\n\f\t\x02\x02\x04\x02"+
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\b\x04\x02\f\f\x0E\x0E\x05\x02\x16"+
    "\x16\x1A\x1A##\x03\x02\x03\b\x04\x02\x03\x03\b\b\x03\x02\x13\x15\x03\x02"+
    "\x0E\x0F\xEA\x02J\x03\x02\x02\x02\x04j\x03\x02\x02\x02\x06}\x03\x02\x02"+
    "\x02\b\x8D\x03\x02\x02\x02\n\xA2\x03\x02\x02\x02\f\xBA\x03\x02\x02\x02"+
    "\x0E\xCB\x03\x02\x02\x02\x10\x11\b\x02\x01\x02\x11K\x07\x16\x02\x02\x12"+
    "\x13\x07\f\x02\x02\x13\x14\x07\x1B\x02\x02\x14\x15\x07\x19\x02\x02\x15"+
    "\x16\x07\x1B\x02\x02\x16K\x07\x19\x02\x02\x17K\x05\b\x05\x02\x18\x19\x07"+
    "\x10\x02\x02\x19\x1A\x07\x1D\x02\x02\x1A\x1B\x07\f\x02\x02\x1BK\x07\x1E"+
    "\x02\x02\x1C\x1D\x07\x11\x02\x02\x1D\x1E\x07\x1D\x02\x02\x1E\x1F\t\x02"+
    "\x02\x02\x1F \x07\x1C\x02\x02 !\x07\x19\x02\x02!K\x07\x1E\x02\x02\"#\x07"+
    "\x12\x02\x02#$\x07\x1D\x02\x02$%\t\x02\x02\x02%&\x07\x1C\x02\x02&\'\x07"+
    "\x19\x02\x02\'(\x07\x1C\x02\x02()\x07\x19\x02\x02)*\x07\x1C\x02\x02*+"+
    "\t\x03\x02\x02+K\x07\x1E\x02\x02,-\x07\x1D\x02\x02-.\x05\x02\x02\x02."+
    "/\x07\x1E\x02\x02/K\x03\x02\x02\x0201\x07\v\x02\x021K\x05\x02\x02\v23"+
    "\x05\b\x05\x0234\t\x04\x02\x0245\x05\x04\x03\x025K\x03\x02\x02\x0267\x05"+
    "\x04\x03\x0278\t\x04\x02\x0289\x05\b\x05\x029K\x03\x02\x02\x02:;\x05\x04"+
    "\x03\x02;<\t\x04\x02\x02<=\x05\x04\x03\x02=K\x03\x02\x02\x02>?\x05\b\x05"+
    "\x02?@\t\x05\x02\x02@A\x05\x06\x04\x02AK\x03\x02\x02\x02BC\x05\x06\x04"+
    "\x02CD\t\x05\x02\x02DE\x05\b\x05\x02EK\x03\x02\x02\x02FG\x05\x06\x04\x02"+
    "GH\t\x05\x02\x02HI\x05\x06\x04\x02IK\x03\x02\x02\x02J\x10\x03\x02\x02"+
    "\x02J\x12\x03\x02\x02\x02J\x17\x03\x02\x02\x02J\x18\x03\x02\x02\x02J\x1C"+
    "\x03\x02\x02\x02J\"\x03\x02\x02\x02J,\x03\x02\x02\x02J0\x03\x02\x02\x02"+
    "J2\x03\x02\x02\x02J6\x03\x02\x02\x02J:\x03\x02\x02\x02J>\x03\x02\x02\x02"+
    "JB\x03\x02\x02\x02JF\x03\x02\x02\x02KT\x03\x02\x02\x02LM\f\x04\x02\x02"+
    "MN\x07\t\x02\x02NS\x05\x02\x02\x05OP\f\x03\x02\x02PQ\x07\n\x02\x02QS\x05"+
    "\x02\x02\x04RL\x03\x02\x02\x02RO\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03"+
    "\x02\x02\x02TU\x03\x02\x02\x02U\x03\x03\x02\x02\x02VT\x03\x02\x02\x02"+
    "WX\b\x03\x01\x02Xk\x07#\x02\x02YZ\x07\f\x02\x02Z[\x07\x1B\x02\x02[\\\x07"+
    "\x19\x02\x02\\]\x07\x1B\x02\x02]k\x07\x19\x02\x02^_\t\x06\x02\x02_`\x07"+
    "\x1D\x02\x02`a\x07\x19\x02\x02ab\x07\x1B\x02\x02bc\x07\x19\x02\x02ck\x07"+
    "\x1E\x02\x02de\x07!\x02\x02ek\x05\x04\x03\x06fg\x07\x1D\x02\x02gh\x05"+
    "\x04\x03\x02hi\x07\x1E\x02\x02ik\x03\x02\x02\x02jW\x03\x02\x02\x02jY\x03"+
    "\x02\x02\x02j^\x03\x02\x02\x02jd\x03\x02\x02\x02jf\x03\x02\x02\x02kt\x03"+
    "\x02\x02\x02lm\f\x04\x02\x02mn\x07\"\x02\x02ns\x05\x04\x03\x05op\f\x03"+
    "\x02\x02pq\x07!\x02\x02qs\x05\x04\x03\x04rl\x03\x02\x02\x02ro\x03\x02"+
    "\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02u\x05\x03"+
    "\x02\x02\x02vt\x03\x02\x02\x02w~\x07\x1A\x02\x02xy\x07\f\x02\x02yz\x07"+
    "\x1B\x02\x02z{\x07\x19\x02\x02{|\x07\x1B\x02\x02|~\x07\x19\x02\x02}w\x03"+
    "\x02\x02\x02}x\x03\x02\x02\x02~\x07\x03\x02\x02\x02\x7F\x80\t\x07\x02"+
    "\x02\x80\x81\x07\x1B\x02\x02\x81\x82\x07\x19\x02\x02\x82\x83\x07\x1B\x02"+
    "\x02\x83\x8E\x07\x19\x02\x02\x84\x85\t\x07\x02\x02\x85\x86\x07\x1F\x02"+
    "\x02\x86\x87\x05\n\x06\x02\x87\x88\x07 \x02\x02\x88\x89\x07\x1B\x02\x02"+
    "\x89\x8A\x07\x19\x02\x02\x8A\x8B\x07\x1B\x02\x02\x8B\x8C\x07\x19\x02\x02"+
    "\x8C\x8E\x03\x02\x02\x02\x8D\x7F\x03\x02\x02\x02\x8D\x84\x03\x02\x02\x02"+
    "\x8E\t\x03\x02\x02\x02\x8F\x90\b\x06\x01\x02\x90\xA3\x07\x16\x02\x02\x91"+
    "\x92\x07\x19\x02\x02\x92\x93\x07\x1B\x02\x02\x93\xA3\x07\x19\x02\x02\x94"+
    "\x95\x07\x1D\x02\x02\x95\x96\x05\n\x06\x02\x96\x97\x07\x1E\x02\x02\x97"+
    "\xA3\x03\x02\x02\x02\x98\x99\x07\v\x02\x02\x99\xA3\x05\n\x06\x07\x9A\x9B"+
    "\x05\f\x07\x02\x9B\x9C\t\x04\x02\x02\x9C\x9D\x05\f\x07\x02\x9D\xA3\x03"+
    "\x02\x02\x02\x9E\x9F\x05\x0E\b\x02\x9F\xA0\t\x05\x02\x02\xA0\xA1\x05\x0E"+
    "\b\x02\xA1\xA3\x03\x02\x02\x02\xA2\x8F\x03\x02\x02\x02\xA2\x91\x03\x02"+
    "\x02\x02\xA2\x94\x03\x02\x02\x02\xA2\x98\x03\x02\x02\x02\xA2\x9A\x03\x02"+
    "\x02\x02\xA2\x9E\x03\x02\x02\x02\xA3\xAC\x03\x02\x02\x02\xA4\xA5\f\x04"+
    "\x02\x02\xA5\xA6\x07\t\x02\x02\xA6\xAB\x05\n\x06\x05\xA7\xA8\f\x03\x02"+
    "\x02\xA8\xA9\x07\n\x02\x02\xA9\xAB\x05\n\x06\x04\xAA\xA4\x03\x02\x02\x02"+
    "\xAA\xA7\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02"+
    "\xAC\xAD\x03\x02\x02\x02\xAD\v\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02"+
    "\xAF\xB0\b\x07\x01\x02\xB0\xBB\x07#\x02\x02\xB1\xB2\x07\x19\x02\x02\xB2"+
    "\xB3\x07\x1B\x02\x02\xB3\xBB\x07\x19\x02\x02\xB4\xB5\x07!\x02\x02\xB5"+
    "\xBB\x05\f\x07\x06\xB6\xB7\x07\x1D\x02\x02\xB7\xB8\x05\f\x07\x02\xB8\xB9"+
    "\x07\x1E\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xAF\x03\x02\x02\x02\xBA\xB1"+
    "\x03\x02\x02\x02\xBA\xB4\x03\x02\x02\x02\xBA\xB6\x03\x02\x02\x02\xBB\xC4"+
    "\x03\x02\x02\x02\xBC\xBD\f\x04\x02\x02\xBD\xBE\x07\"\x02\x02\xBE\xC3\x05"+
    "\f\x07\x05\xBF\xC0\f\x03\x02\x02\xC0\xC1\x07!\x02\x02\xC1\xC3\x05\f\x07"+
    "\x04\xC2\xBC\x03\x02\x02\x02\xC2\xBF\x03\x02\x02\x02\xC3\xC6\x03\x02\x02"+
    "\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\r\x03\x02\x02"+
    "\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCC\x07\x1A\x02\x02\xC8\xC9\x07\x19\x02"+
    "\x02\xC9\xCA\x07\x1B\x02\x02\xCA\xCC\x07\x19\x02\x02\xCB\xC7\x03\x02\x02"+
    "\x02\xCB\xC8\x03\x02\x02\x02\xCC\x0F\x03\x02\x02\x02\x11JRTjrt}\x8D\xA2"+
    "\xAA\xAC\xBA\xC2\xC4\xCB";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GlobalConditionsGrammarParser.__ATN) {
      GlobalConditionsGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GlobalConditionsGrammarParser._serializedATN));
    }

    return GlobalConditionsGrammarParser.__ATN;
  }

}

