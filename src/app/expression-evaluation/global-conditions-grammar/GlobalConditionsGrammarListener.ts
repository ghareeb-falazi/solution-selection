// Generated from src/assets/grammars/GlobalConditionsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
	 * Enter a parse tree produced by the `mvv`
	 * labeled alternative in `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	enterMvv?: (ctx: MvvContext) => void;
	/**
	 * Exit a parse tree produced by the `mvv`
	 * labeled alternative in `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	exitMvv?: (ctx: MvvContext) => void;

	/**
	 * Enter a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBoolConstant?: (ctx: FBoolConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBoolConstant?: (ctx: FBoolConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBoolVariable?: (ctx: FBoolVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBoolVariable?: (ctx: FBoolVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `fStringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFStringComparison?: (ctx: FStringComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringComparison`
	 * labeled alternative in `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFStringComparison?: (ctx: FStringComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticConstant?: (ctx: FArithmeticConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticConstant?: (ctx: FArithmeticConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticVariable?: (ctx: FArithmeticVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticVariable?: (ctx: FArithmeticVariableContext) => void;

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
	 * Enter a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterRightMVVArithComp?: (ctx: RightMVVArithCompContext) => void;
	/**
	 * Exit a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitRightMVVArithComp?: (ctx: RightMVVArithCompContext) => void;

	/**
	 * Enter a parse tree produced by the `boolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolVariable?: (ctx: BoolVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `boolVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolVariable?: (ctx: BoolVariableContext) => void;

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
	 * Enter a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => void;
	/**
	 * Exit a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => void;

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
	 * Enter a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => void;
	/**
	 * Exit a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => void;

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
	 * Enter a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterRightMVVStringComp?: (ctx: RightMVVStringCompContext) => void;
	/**
	 * Exit a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitRightMVVStringComp?: (ctx: RightMVVStringCompContext) => void;

	/**
	 * Enter a parse tree produced by the `boolMVV`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolMVV?: (ctx: BoolMVVContext) => void;
	/**
	 * Exit a parse tree produced by the `boolMVV`
	 * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolMVV?: (ctx: BoolMVVContext) => void;

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
	 * Enter a parse tree produced by the `fStringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringVariable?: (ctx: FStringVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringVariable`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringVariable?: (ctx: FStringVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `fStringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringAtom?: (ctx: FStringAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringAtom`
	 * labeled alternative in `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringAtom?: (ctx: FStringAtomContext) => void;

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

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	enterMultiValueVariable?: (ctx: MultiValueVariableContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	exitMultiValueVariable?: (ctx: MultiValueVariableContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBooleanExpression?: (ctx: FBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBooleanExpression?: (ctx: FBooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringValue?: (ctx: FStringValueContext) => void;
	/**
	 * Exit a parse tree produced by `GlobalConditionsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringValue?: (ctx: FStringValueContext) => void;
}

