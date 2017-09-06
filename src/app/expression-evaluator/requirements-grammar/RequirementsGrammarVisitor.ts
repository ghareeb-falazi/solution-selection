// Generated from src/assets/grammars/RequirementsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringVariableContext } from './RequirementsGrammarParser';
import { StringAtomContext } from './RequirementsGrammarParser';
import { MvvContext } from './RequirementsGrammarParser';
import { FBinaryBoolOpContext } from './RequirementsGrammarParser';
import { FArithmeticComparisonContext } from './RequirementsGrammarParser';
import { FBoolConstantContext } from './RequirementsGrammarParser';
import { FUnaryBoolOpContext } from './RequirementsGrammarParser';
import { FBoolVariableContext } from './RequirementsGrammarParser';
import { FStringComparisonContext } from './RequirementsGrammarParser';
import { FArithmeticConstantContext } from './RequirementsGrammarParser';
import { FBinaryArithmeticOpContext } from './RequirementsGrammarParser';
import { FUnaryArithmeticOpContext } from './RequirementsGrammarParser';
import { FArithmeticVariableContext } from './RequirementsGrammarParser';
import { ArithmeticConstantContext } from './RequirementsGrammarParser';
import { BinaryArithmeticOpContext } from './RequirementsGrammarParser';
import { ArithmeticVariableContext } from './RequirementsGrammarParser';
import { ArithmeticFuncContext } from './RequirementsGrammarParser';
import { UnaryArithmeticOpContext } from './RequirementsGrammarParser';
import { RightMVVArithCompContext } from './RequirementsGrammarParser';
import { BoolVariableContext } from './RequirementsGrammarParser';
import { ExistsCapContext } from './RequirementsGrammarParser';
import { ArithmeticComparisonContext } from './RequirementsGrammarParser';
import { BoolConstantContext } from './RequirementsGrammarParser';
import { UnaryBoolOpContext } from './RequirementsGrammarParser';
import { StringComparisonContext } from './RequirementsGrammarParser';
import { LeftMVVArithCompContext } from './RequirementsGrammarParser';
import { ExistsValContext } from './RequirementsGrammarParser';
import { LeftMVVStringCompContext } from './RequirementsGrammarParser';
import { ExistsCSContext } from './RequirementsGrammarParser';
import { RightMVVStringCompContext } from './RequirementsGrammarParser';
import { BoolMVVContext } from './RequirementsGrammarParser';
import { BinaryBoolOpContext } from './RequirementsGrammarParser';
import { FStringVariableContext } from './RequirementsGrammarParser';
import { FStringAtomContext } from './RequirementsGrammarParser';
import { BooleanExpressionContext } from './RequirementsGrammarParser';
import { ArithmeticExpressionContext } from './RequirementsGrammarParser';
import { StringValueContext } from './RequirementsGrammarParser';
import { MultiValueVariableContext } from './RequirementsGrammarParser';
import { FBooleanExpressionContext } from './RequirementsGrammarParser';
import { FArithmeticExpressionContext } from './RequirementsGrammarParser';
import { FStringValueContext } from './RequirementsGrammarParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RequirementsGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RequirementsGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringVariable`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringVariable?: (ctx: StringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringAtom`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `mvv`
	 * labeled alternative in `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMvv?: (ctx: MvvContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolConstant?: (ctx: FBoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolVariable?: (ctx: FBoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringComparison?: (ctx: FStringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticConstant?: (ctx: FArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticVariable?: (ctx: FArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticConstant?: (ctx: ArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticVariable?: (ctx: ArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticFunc?: (ctx: ArithmeticFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVArithComp?: (ctx: RightMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolVariable`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolVariable?: (ctx: BoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCap`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCap?: (ctx: ExistsCapContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolConstant`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolConstant?: (ctx: BoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparison?: (ctx: StringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsVal`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsVal?: (ctx: ExistsValContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCS`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCS?: (ctx: ExistsCSContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVStringComp?: (ctx: RightMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolMVV`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolMVV?: (ctx: BoolMVVContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringVariable`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringVariable?: (ctx: FStringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringAtom`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringAtom?: (ctx: FStringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiValueVariable?: (ctx: MultiValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBooleanExpression?: (ctx: FBooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringValue?: (ctx: FStringValueContext) => Result;
}

