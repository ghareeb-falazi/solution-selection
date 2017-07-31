// Generated from src/assets/SimpleGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringAtomContext } from './SimpleGrammarParser';
import { BinaryArithmeticOpContext } from './SimpleGrammarParser';
import { ArithmeticAtomContext } from './SimpleGrammarParser';
import { UnaryArithmeticOpContext } from './SimpleGrammarParser';
import { UnaryBoolOpContext } from './SimpleGrammarParser';
import { StringComparisonContext } from './SimpleGrammarParser';
import { BoolAtomContext } from './SimpleGrammarParser';
import { ArithmeticComparisonContext } from './SimpleGrammarParser';
import { BinaryBoolOpContext } from './SimpleGrammarParser';
import { BooleanExpressionContext } from './SimpleGrammarParser';
import { ArithmeticExpressionContext } from './SimpleGrammarParser';
import { StringValueContext } from './SimpleGrammarParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimpleGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringAtom`
	 * labeled alternative in `SimpleGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `SimpleGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticAtom`
	 * labeled alternative in `SimpleGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticAtom?: (ctx: ArithmeticAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `SimpleGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringComparison`
	 * labeled alternative in `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparison?: (ctx: StringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolAtom`
	 * labeled alternative in `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolAtom?: (ctx: BoolAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;
}

