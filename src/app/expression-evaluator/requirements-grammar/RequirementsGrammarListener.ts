// Generated from src/assets/RequirementsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `RequirementsGrammarParser`.
 */
export interface RequirementsGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `stringVariable`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringVariable?: (ctx: StringVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `stringVariable`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringVariable?: (ctx: StringVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `stringConstant`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringConstant?: (ctx: StringConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `stringConstant`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringConstant?: (ctx: StringConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticConstant?: (ctx: ArithmeticConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticConstant?: (ctx: ArithmeticConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticVariable?: (ctx: ArithmeticVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticVariable?: (ctx: ArithmeticVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryBoolOp?: (ctx: UnaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `stringComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterStringComparison?: (ctx: StringComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `stringComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitStringComparison?: (ctx: StringComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `boolVariable`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolVariable?: (ctx: BoolVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `boolVariable`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolVariable?: (ctx: BoolVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticComparison?: (ctx: ArithmeticComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `boolConstant`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolConstant?: (ctx: BoolConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `boolConstant`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolConstant?: (ctx: BoolConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryBoolOp?: (ctx: BinaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;
}

