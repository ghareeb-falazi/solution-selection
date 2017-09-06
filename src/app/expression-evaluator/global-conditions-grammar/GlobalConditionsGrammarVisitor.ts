// Generated from src/assets/grammars/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringVariableContext } from './GlobalConditionsGrammarParser';
import { StringAtomContext } from './GlobalConditionsGrammarParser';
import { MvvContext } from './GlobalConditionsGrammarParser';
import { FBinaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { FArithmeticComparisonContext } from './GlobalConditionsGrammarParser';
import { FBoolConstantContext } from './GlobalConditionsGrammarParser';
import { FUnaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { FBoolVariableContext } from './GlobalConditionsGrammarParser';
import { FStringComparisonContext } from './GlobalConditionsGrammarParser';
import { FArithmeticConstantContext } from './GlobalConditionsGrammarParser';
import { FBinaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { FUnaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { FArithmeticVariableContext } from './GlobalConditionsGrammarParser';
import { ArithmeticConstantContext } from './GlobalConditionsGrammarParser';
import { BinaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { ArithmeticVariableContext } from './GlobalConditionsGrammarParser';
import { ArithmeticFuncContext } from './GlobalConditionsGrammarParser';
import { UnaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { RightMVVArithCompContext } from './GlobalConditionsGrammarParser';
import { BoolVariableContext } from './GlobalConditionsGrammarParser';
import { ExistsCapContext } from './GlobalConditionsGrammarParser';
import { ArithmeticComparisonContext } from './GlobalConditionsGrammarParser';
import { BoolConstantContext } from './GlobalConditionsGrammarParser';
import { UnaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { StringComparisonContext } from './GlobalConditionsGrammarParser';
import { LeftMVVArithCompContext } from './GlobalConditionsGrammarParser';
import { ExistsValContext } from './GlobalConditionsGrammarParser';
import { LeftMVVStringCompContext } from './GlobalConditionsGrammarParser';
import { ExistsCSContext } from './GlobalConditionsGrammarParser';
import { RightMVVStringCompContext } from './GlobalConditionsGrammarParser';
import { BoolMVVContext } from './GlobalConditionsGrammarParser';
import { BinaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { FStringVariableContext } from './GlobalConditionsGrammarParser';
import { FStringAtomContext } from './GlobalConditionsGrammarParser';
import { BooleanExpressionContext } from './GlobalConditionsGrammarParser';
import { ArithmeticExpressionContext } from './GlobalConditionsGrammarParser';
import { StringValueContext } from './GlobalConditionsGrammarParser';
import { MultiValueVariableContext } from './GlobalConditionsGrammarParser';
import { FBooleanExpressionContext } from './GlobalConditionsGrammarParser';
import { FArithmeticExpressionContext } from './GlobalConditionsGrammarParser';
import { FStringValueContext } from './GlobalConditionsGrammarParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GlobalConditionsGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GlobalConditionsGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringVariable?: (ctx: StringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `mvv`
	 * labeled alternative in `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMvv?: (ctx: MvvContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolConstant?: (ctx: FBoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolVariable?: (ctx: FBoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringComparison?: (ctx: FStringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticConstant?: (ctx: FArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticVariable?: (ctx: FArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticConstant?: (ctx: ArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticVariable?: (ctx: ArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticFunc?: (ctx: ArithmeticFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVArithComp?: (ctx: RightMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolVariable?: (ctx: BoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCap`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCap?: (ctx: ExistsCapContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolConstant?: (ctx: BoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparison?: (ctx: StringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsVal`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsVal?: (ctx: ExistsValContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCS`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCS?: (ctx: ExistsCSContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVStringComp?: (ctx: RightMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolMVV`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolMVV?: (ctx: BoolMVVContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringVariable?: (ctx: FStringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringAtom?: (ctx: FStringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiValueVariable?: (ctx: MultiValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBooleanExpression?: (ctx: FBooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringValue?: (ctx: FStringValueContext) => Result;
}

