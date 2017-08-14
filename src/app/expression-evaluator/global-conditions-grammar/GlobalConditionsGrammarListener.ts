// Generated from src/assets/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { StringVariableContext } from './GlobalConditionsGrammarParser';
import { StringAtomContext } from './GlobalConditionsGrammarParser';
import { ArithmeticConstantContext } from './GlobalConditionsGrammarParser';
import { BinaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { ArithmeticVariableContext } from './GlobalConditionsGrammarParser';
import { ArithmeticFuncContext } from './GlobalConditionsGrammarParser';
import { UnaryArithmeticOpContext } from './GlobalConditionsGrammarParser';
import { UnaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { StringComparisonContext } from './GlobalConditionsGrammarParser';
import { ExistsValContext } from './GlobalConditionsGrammarParser';
import { ExistsCSContext } from './GlobalConditionsGrammarParser';
import { ExistsCapContext } from './GlobalConditionsGrammarParser';
import { BooleanVariableContext } from './GlobalConditionsGrammarParser';
import { ArithmeticComparisonContext } from './GlobalConditionsGrammarParser';
import { BoolConstantContext } from './GlobalConditionsGrammarParser';
import { BinaryBoolOpContext } from './GlobalConditionsGrammarParser';
import { BooleanExpressionContext } from './GlobalConditionsGrammarParser';
import { ArithmeticExpressionContext } from './GlobalConditionsGrammarParser';
import { StringValueContext } from './GlobalConditionsGrammarParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GlobalConditionsGrammarParser`.
 */
export interface GlobalConditionsGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `stringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringVariable?: (ctx: StringVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `stringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringVariable?: (ctx: StringVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `stringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringAtom?: (ctx: StringAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringAtom?: (ctx: StringAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticConstant?: (ctx: ArithmeticConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticConstant?: (ctx: ArithmeticConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticVariable?: (ctx: ArithmeticVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticVariable?: (ctx: ArithmeticVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticFunc?: (ctx: ArithmeticFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticFunc?: (ctx: ArithmeticFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryBoolOp?: (ctx: UnaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `stringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterStringComparison?: (ctx: StringComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `stringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitStringComparison?: (ctx: StringComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `existsVal`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsVal?: (ctx: ExistsValContext) => void;
	/**
	 * Exit a parse tree produced by the `existsVal`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsVal?: (ctx: ExistsValContext) => void;

	/**
	 * Enter a parse tree produced by the `existsCS`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsCS?: (ctx: ExistsCSContext) => void;
	/**
	 * Exit a parse tree produced by the `existsCS`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsCS?: (ctx: ExistsCSContext) => void;

	/**
	 * Enter a parse tree produced by the `existsCap`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsCap?: (ctx: ExistsCapContext) => void;
	/**
	 * Exit a parse tree produced by the `existsCap`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsCap?: (ctx: ExistsCapContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanVariable?: (ctx: BooleanVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanVariable?: (ctx: BooleanVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticComparison?: (ctx: ArithmeticComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `boolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolConstant?: (ctx: BoolConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `boolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolConstant?: (ctx: BoolConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryBoolOp?: (ctx: BinaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;
}

