// Generated from src/assets/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringAtomContext } from './GlobalConditionsGrammarParser';
import { BinaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { ArithmeticAtomContext } from './GlobalConditionsGrammarParser';
import { ArithmeticFuncContext } from './GlobalConditionsGrammarParser';
import { UnaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { UnaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { StringComparisonContext } from './GlobalConditionsGrammarParser';
import { BooleanFuncContext } from './GlobalConditionsGrammarParser';
import { BoolAtomContext } from './GlobalConditionsGrammarParser';
import { ArithmeticComparisonContext } from './GlobalConditionsGrammarParser';
import { BinaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { BooleanExpressionContext } from './GlobalConditionsGrammarParser';
import { ArithmeticExpressionContext } from './GlobalConditionsGrammarParser';
import { StringValueContext } from './GlobalConditionsGrammarParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GlobalConditionsGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GlobalConditionsGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticAtom?: (ctx: ArithmeticAtomContext) => Result;

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
	 * Visit a parse tree produced by the `booleanFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanFunc?: (ctx: BooleanFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolAtom?: (ctx: BoolAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

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
}

