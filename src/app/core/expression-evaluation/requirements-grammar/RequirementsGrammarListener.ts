// Generated from src/assets/grammars/RequirementsGrammar.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
	 * Enter a parse tree produced by the `stringAtom`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringAtom?: (ctx: StringAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAtom`
	 * labeled alternative in `RequirementsGrammarParser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringAtom?: (ctx: StringAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `mvv`
	 * labeled alternative in `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	enterMvv?: (ctx: MvvContext) => void;
	/**
	 * Exit a parse tree produced by the `mvv`
	 * labeled alternative in `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	exitMvv?: (ctx: MvvContext) => void;

	/**
	 * Enter a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fBinaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBinaryBoolOp?: (ctx: FBinaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticComparison?: (ctx: FArithmeticComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBoolConstant?: (ctx: FBoolConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `fBoolConstant`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBoolConstant?: (ctx: FBoolConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fUnaryBoolOp`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFUnaryBoolOp?: (ctx: FUnaryBoolOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBoolVariable?: (ctx: FBoolVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fBoolVariable`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBoolVariable?: (ctx: FBoolVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `fStringComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFStringComparison?: (ctx: FStringComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringComparison`
	 * labeled alternative in `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFStringComparison?: (ctx: FStringComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticConstant?: (ctx: FArithmeticConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticConstant`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticConstant?: (ctx: FArithmeticConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fBinaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFBinaryArithmeticOp?: (ctx: FBinaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by the `fUnaryArithmeticOp`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFUnaryArithmeticOp?: (ctx: FUnaryArithmeticOpContext) => void;

	/**
	 * Enter a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticVariable?: (ctx: FArithmeticVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fArithmeticVariable`
	 * labeled alternative in `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticVariable?: (ctx: FArithmeticVariableContext) => void;

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
	 * Enter a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticFunc?: (ctx: ArithmeticFuncContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticFunc`
	 * labeled alternative in `RequirementsGrammarParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticFunc?: (ctx: ArithmeticFuncContext) => void;

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
	 * Enter a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterRightMVVArithComp?: (ctx: RightMVVArithCompContext) => void;
	/**
	 * Exit a parse tree produced by the `rightMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitRightMVVArithComp?: (ctx: RightMVVArithCompContext) => void;

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
	 * Enter a parse tree produced by the `existsCap`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsCap?: (ctx: ExistsCapContext) => void;
	/**
	 * Exit a parse tree produced by the `existsCap`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsCap?: (ctx: ExistsCapContext) => void;

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
	 * Enter a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => void;
	/**
	 * Exit a parse tree produced by the `leftMVVArithComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftMVVArithComp?: (ctx: LeftMVVArithCompContext) => void;

	/**
	 * Enter a parse tree produced by the `existsVal`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsVal?: (ctx: ExistsValContext) => void;
	/**
	 * Exit a parse tree produced by the `existsVal`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsVal?: (ctx: ExistsValContext) => void;

	/**
	 * Enter a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => void;
	/**
	 * Exit a parse tree produced by the `leftMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftMVVStringComp?: (ctx: LeftMVVStringCompContext) => void;

	/**
	 * Enter a parse tree produced by the `existsCS`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExistsCS?: (ctx: ExistsCSContext) => void;
	/**
	 * Exit a parse tree produced by the `existsCS`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExistsCS?: (ctx: ExistsCSContext) => void;

	/**
	 * Enter a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterRightMVVStringComp?: (ctx: RightMVVStringCompContext) => void;
	/**
	 * Exit a parse tree produced by the `rightMVVStringComp`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitRightMVVStringComp?: (ctx: RightMVVStringCompContext) => void;

	/**
	 * Enter a parse tree produced by the `boolMVV`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolMVV?: (ctx: BoolMVVContext) => void;
	/**
	 * Exit a parse tree produced by the `boolMVV`
	 * labeled alternative in `RequirementsGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolMVV?: (ctx: BoolMVVContext) => void;

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
	 * Enter a parse tree produced by the `fStringVariable`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringVariable?: (ctx: FStringVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringVariable`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringVariable?: (ctx: FStringVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `fStringAtom`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringAtom?: (ctx: FStringAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `fStringAtom`
	 * labeled alternative in `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringAtom?: (ctx: FStringAtomContext) => void;

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

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	enterMultiValueVariable?: (ctx: MultiValueVariableContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.multiValueVariable`.
	 * @param ctx the parse tree
	 */
	exitMultiValueVariable?: (ctx: MultiValueVariableContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterFBooleanExpression?: (ctx: FBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.fBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitFBooleanExpression?: (ctx: FBooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.fArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitFArithmeticExpression?: (ctx: FArithmeticExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	enterFStringValue?: (ctx: FStringValueContext) => void;
	/**
	 * Exit a parse tree produced by `RequirementsGrammarParser.fStringValue`.
	 * @param ctx the parse tree
	 */
	exitFStringValue?: (ctx: FStringValueContext) => void;
}

