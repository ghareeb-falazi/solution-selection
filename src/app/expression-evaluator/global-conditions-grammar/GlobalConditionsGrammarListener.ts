// Generated from src/assets/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `GlobalConditionsGrammarParser`.
 */
export interface GlobalConditionsGrammarListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by the `arithmeticAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticAtom?: (ctx: ArithmeticAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticAtom?: (ctx: ArithmeticAtomContext) => void;

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
	 * Enter a parse tree produced by the `booleanFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanFunc?: (ctx: BooleanFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanFunc`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanFunc?: (ctx: BooleanFuncContext) => void;

	/**
	 * Enter a parse tree produced by the `boolAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolAtom?: (ctx: BoolAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `boolAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolAtom?: (ctx: BoolAtomContext) => void;

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

