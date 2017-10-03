// Generated from src/assets/grammars/UserQueryGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { StringVariableContext } from './UserQueryGrammarParser';
import { StringAtomContext } from './UserQueryGrammarParser';
import { MvvContext } from './UserQueryGrammarParser';
import { FBinaryBoolOpContext } from './UserQueryGrammarParser';
import { FArithmeticComparisonContext } from './UserQueryGrammarParser';
import { FBoolConstantContext } from './UserQueryGrammarParser';
import { FUnaryBoolOpContext } from './UserQueryGrammarParser';
import { FBoolVariableContext } from './UserQueryGrammarParser';
import { FStringComparisonContext } from './UserQueryGrammarParser';
import { FArithmeticConstantContext } from './UserQueryGrammarParser';
import { FBinaryArithmeticOpContext } from './UserQueryGrammarParser';
import { FUnaryArithmeticOpContext } from './UserQueryGrammarParser';
import { FArithmeticVariableContext } from './UserQueryGrammarParser';
import { ArithmeticConstantContext } from './UserQueryGrammarParser';
import { BinaryArithmeticOpContext } from './UserQueryGrammarParser';
import { ArithmeticVariableContext } from './UserQueryGrammarParser';
import { ArithmeticFuncContext } from './UserQueryGrammarParser';
import { UnaryArithmeticOpContext } from './UserQueryGrammarParser';
import { RightMVVArithCompContext } from './UserQueryGrammarParser';
import { BoolVariableContext } from './UserQueryGrammarParser';
import { ExistsCapContext } from './UserQueryGrammarParser';
import { ArithmeticComparisonContext } from './UserQueryGrammarParser';
import { BoolConstantContext } from './UserQueryGrammarParser';
import { UnaryBoolOpContext } from './UserQueryGrammarParser';
import { StringComparisonContext } from './UserQueryGrammarParser';
import { LeftMVVArithCompContext } from './UserQueryGrammarParser';
import { ExistsValContext } from './UserQueryGrammarParser';
import { LeftMVVStringCompContext } from './UserQueryGrammarParser';
import { ExistsCSContext } from './UserQueryGrammarParser';
import { RightMVVStringCompContext } from './UserQueryGrammarParser';
import { BoolMVVContext } from './UserQueryGrammarParser';
import { BinaryBoolOpContext } from './UserQueryGrammarParser';
import { FStringVariableContext } from './UserQueryGrammarParser';
import { FStringAtomContext } from './UserQueryGrammarParser';
import { BooleanExpressionContext } from './UserQueryGrammarParser';
import { ArithmeticExpressionContext } from './UserQueryGrammarParser';
import { StringValueContext } from './UserQueryGrammarParser';
import { MultiValueVariableContext } from './UserQueryGrammarParser';
import { FBooleanExpressionContext } from './UserQueryGrammarParser';
import { FArithmeticExpressionContext } from './UserQueryGrammarParser';
import { FStringValueContext } from './UserQueryGrammarParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UserQueryGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UserQueryGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringVariable`
	 * labeled alternative in `UserQueryGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringVariable?: (ctx: StringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringAtom`
	 * labeled alternative in `UserQueryGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `mvv`
	 * labeled alternative in `UserQueryGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMvv?: (ctx: MvvContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolConstant?: (ctx: FBoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBoolVariable?: (ctx: FBoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringComparison`
	 * labeled alternative in `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringComparison?: (ctx: FStringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `UserQueryGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticConstant?: (ctx: FArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `UserQueryGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `UserQueryGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `UserQueryGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticVariable?: (ctx: FArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticConstant`
	 * labeled alternative in `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticConstant?: (ctx: ArithmeticConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryArithmeticOp`
	 * labeled alternative in `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOp?: (ctx: BinaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticVariable`
	 * labeled alternative in `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticVariable?: (ctx: ArithmeticVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticFunc?: (ctx: ArithmeticFuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryArithmeticOp`
	 * labeled alternative in `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOp?: (ctx: UnaryArithmeticOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVArithComp?: (ctx: RightMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolVariable`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolVariable?: (ctx: BoolVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCap`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCap?: (ctx: ExistsCapContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticComparison`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparison?: (ctx: ArithmeticComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolConstant`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolConstant?: (ctx: BoolConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryBoolOp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryBoolOp?: (ctx: UnaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringComparison`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparison?: (ctx: StringComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsVal`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsVal?: (ctx: ExistsValContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsCS`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsCS?: (ctx: ExistsCSContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightMVVStringComp?: (ctx: RightMVVStringCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolMVV`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolMVV?: (ctx: BoolMVVContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryBoolOp`
	 * labeled alternative in `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryBoolOp?: (ctx: BinaryBoolOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringVariable`
	 * labeled alternative in `UserQueryGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringVariable?: (ctx: FStringVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringAtom`
	 * labeled alternative in `UserQueryGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringAtom?: (ctx: FStringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiValueVariable?: (ctx: MultiValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFBooleanExpression?: (ctx: FBooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `UserQueryGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringValue?: (ctx: FStringValueContext) => Result;
}

