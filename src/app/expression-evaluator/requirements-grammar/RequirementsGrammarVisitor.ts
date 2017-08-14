// Generated from src/assets/RequirementsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringVariableContext } from './RequirementsGrammarParser';
import { StringConstantContext } from './RequirementsGrammarParser';
import { ArithmeticConstantContext } from './RequirementsGrammarParser';
import { BinaryArithmeticOpContext } from './RequirementsGrammarParser';
import { ArithmeticVariableContext } from './RequirementsGrammarParser';
import { UnaryArithmeticOpContext } from './RequirementsGrammarParser';
import { UnaryBoolOpContext } from './RequirementsGrammarParser';
import { StringComparisonContext } from './RequirementsGrammarParser';
import { BoolVariableContext } from './RequirementsGrammarParser';
import { ArithmeticComparisonContext } from './RequirementsGrammarParser';
import { BoolConstantContext } from './RequirementsGrammarParser';
import { BinaryBoolOpContext } from './RequirementsGrammarParser';
import { BooleanExpressionContext } from './RequirementsGrammarParser';
import { ArithmeticExpressionContext } from './RequirementsGrammarParser';
import { StringValueContext } from './RequirementsGrammarParser';


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
	 * Visit a parse tree produced by the `stringConstant`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConstant?: (ctx: StringConstantContext) => Result;

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
	 * Visit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => Result;

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
	 * Visit a parse tree produced by the `boolVariable`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolVariable?: (ctx: BoolVariableContext) => Result;

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
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

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
}

