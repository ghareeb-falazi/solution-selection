import {RequirementsGrammarVisitor} from './requirements-grammar/RequirementsGrammarVisitor';
import {AbstractParseTreeVisitor} from 'antlr4ts/tree';
import {
  ArithmeticConstantContext, ArithmeticComparisonContext, ArithmeticFuncContext, BinaryArithmeticOpContext,
  BinaryBoolOpContext, BoolConstantContext,
  StringAtomContext,
  StringComparisonContext,
  UnaryArithmeticOpContext, UnaryBoolOpContext, ExistsCSContext, ExistsCapContext,
  ExistsValContext, ArithmeticVariableContext, StringVariableContext, LeftMVVArithCompContext, RightMVVArithCompContext,
  LeftMVVStringCompContext, RightMVVStringCompContext, MvvContext, FArithmeticComparisonContext,
  FStringComparisonContext, FBinaryBoolOpContext, FBinaryArithmeticOpContext, FUnaryBoolOpContext,
  FUnaryArithmeticOpContext, FArithmeticConstantContext, FStringAtomContext, FBoolConstantContext,
  FArithmeticVariableContext, FStringVariableContext, FBooleanExpressionContext, BoolVariableContext,
  FBoolVariableContext, BoolMVVContext
} from './requirements-grammar/RequirementsGrammarParser';
import {ContextModel} from '../../data-model/context.model';

import {VariableTypeError} from './variable-type.error';
import {isNumeric} from 'rxjs/util/isNumeric';
import {VariableNotFoundError} from './variable-not-found.error';
import {isNullOrUndefined} from 'util';
import {LITERAL_TYPE} from './literal-type.enum';
import {VisitorHelper} from './visitor-helper';



/**
 * Evaluates a parsed requirement tree based on a given context
 */
export class MyRequirementsVisitor extends AbstractParseTreeVisitor<any> implements RequirementsGrammarVisitor<any> {
  private currentCSId: string;

  constructor(private context: ContextModel, private solutionUriOfRequirement: string) {
    super();
  }

  protected defaultResult() {
    return false;
  }

  /*Helper Methods*/
  /**
   * Gets the value of a property of one of the capabilities of a given concrete solution
   * @param {string} concreteSolutionName
   * @param {string} capabilityName
   * @param {string} propertyName
   * @returns {any}
   */
  getVariableValue(concreteSolutionName: string, capabilityName: string, propertyName: string): any {
    const caps = this.context.getCapabilitiesOfSolution(concreteSolutionName);

    if (caps) {// else cs is not in path
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {
          return cap.properties.get(propertyName);
        }
      }
    }

    return null;
  }


  /**
   * Checks whether a given property's value exists (cs, capability, property, and value need to exist)
   * @param {string} capabilityName
   * @param {string} propertyName
   * @param value
   * @param {LITERAL_TYPE} type
   * @param {string} concreteSolutionUri
   * @returns {boolean}
   */
  checkIfValueExists(capabilityName: string, propertyName: string, value: any, type: LITERAL_TYPE, concreteSolutionUri?: string): boolean {
    if (concreteSolutionUri) {// a solution is specified
      const caps = this.context.getCapabilitiesOfSolution(concreteSolutionUri);

      if (caps) {// otherwise the solution is not found or has no caps
        for (const cap of caps) {
          if (cap.name === capabilityName && cap.properties.has(propertyName)) {
            if (VisitorHelper.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type)) {
              return true;
            }
          }
        }
      }
    } else {// no concrete solution is specified (ANY)
      for (const sol of this.context.getAllCapabilities().values()) {
        for (const cap of sol) {
          if (cap.name === capabilityName && cap.properties.has(propertyName)) {
            if (VisitorHelper.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type)) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * Checks if the given capability name exists within a given cs (or ANY)
   * @param {string} capabilityName
   * @param {string} concreteSolution
   * @returns {boolean}
   */
  checkIfCapabilityExists(capabilityName: string, concreteSolution?: string): boolean {
    if (concreteSolution) {// a concrete solution is specified
      const caps = this.context.getCapabilitiesOfSolution(concreteSolution);

      if (caps) {
        for (const cap of caps) {
          if (cap.name === capabilityName) {
            return true;
          }
        }
      }
    } else {// we need to look through solutions (ANY)
      for (const caps of this.context.getAllCapabilities().values()) {
        for (const cap of caps) {
          if (cap.name === capabilityName) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * Checks whether a concrete solution with a given name exists
   * @param {string} concreteSolution
   * @returns {boolean}
   */
  checkIfSolutionExists(concreteSolution: string): boolean {
    return this.context.getAllConcreteSolutionsUris().indexOf(concreteSolution) >= 0;
  }

  /**
   * Counts the number of times a property of a given capability occurs among all concrete solutions
   * @param {string} capabilityName
   * @param {string} propertyName
   * @returns {number}
   */
  countVariable(capabilityName: string, propertyName: string): number {
    let count = 0.0;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {// only sum if the capability has the variable
          count += 1;
        }
      }
    }

    return count;
  }

  /**
   * Sums the values of a property of a given capability among all CSs
   * @param {string} capabilityName
   * @param {string} propertyName
   * @returns {number}
   */
  sumVariableValues(capabilityName: string, propertyName: string): number {
    let sum = 0.0;
    let currentValue: number;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {// only sum if the capability has the variable
          if (!isNumeric(cap.properties.get(propertyName))) {
            throw new VariableTypeError(null, `The type of variable ${capabilityName}.${propertyName} is not numeric!`);
          }

          currentValue = Number(cap.properties.get(propertyName));
          sum += currentValue;
        }
      }
    }

    return sum;
  }

  /**
   * Averages the values of a property of a given capability among all CSs
   * @param {string} capabilityName
   * @param {string} propertyName
   * @returns {number}
   */
  averageVariable(capabilityName: string, propertyName: string): number {
    let sum = 0.0;
    let count = 0;
    let currentValue: number;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {// only sum if the capability has the variable
          if (!isNumeric(cap.properties.get(propertyName))) {
            throw new VariableTypeError(null, `The type of variable ${capabilityName}.${propertyName} is not numeric!`);
          }

          currentValue = Number(cap.properties.get(propertyName));
          sum += currentValue;
          count += 1;
        }
      }
    }

    return sum / count;
  }



  /**
   * Filters a set of concrete solutions based on a the fulfillment of a sub condition.
   * An error is throne only if a syntax error is present in the sub condition.
   * @param {string[]} csUris
   * @param {FBooleanExpressionContext} filterContext
   * @returns {string[]}
   */
  filter(csUris: string[], filterContext: FBooleanExpressionContext): string[] {
    const result: string[] = [];
    for (const csUri of csUris) {
      this.currentCSId = csUri;

      try {
        if (this.visit(filterContext)) {// this item is valid
          result.push(this.currentCSId);
        }
      } catch (e) {
        if (!(e instanceof VariableNotFoundError)) {// otherwise I do not care
          throw e;
        }
      }
    }

    this.currentCSId = null;

    return result;
  }

  /* Comparison */
  visitArithmeticComparison(ctx: ArithmeticComparisonContext): boolean {

    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return VisitorHelper.checkArithmeticComparison(leftValue, rightValue, ctx._op.text);
  }

  visitLeftMVVArithComp(ctx: LeftMVVArithCompContext): boolean {
    const leftValues: any[] = this.visit(ctx._left);
    const rightValue: number = this.visit(ctx._right);
    const accessorText: string = ctx._left.text.toLowerCase();

    if (accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0) { // one is enough
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {
          if (VisitorHelper.checkArithmeticComparison(Number(leftValue), rightValue, ctx._op.text)) {
            return true;
          }
        }
      }

      return false;
    } else {// ALL or filtered ALL
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {// skip null values
          if (!VisitorHelper.checkArithmeticComparison(Number(leftValue), rightValue, ctx._op.text)) {
            return false; // if one is false, everything is false
          }
        }
      }

      return true;
    }

  }

  visitRightMVVArithComp(ctx: RightMVVArithCompContext): boolean {
    const leftValue: number = this.visit(ctx._left);
    const rightValues: any[] = this.visit(ctx._right); // null might be within
    const accessorText: string = ctx._right.text.toLowerCase();

    if (accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0) {// any or any[filter] : one is enough
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {
          if (VisitorHelper.checkArithmeticComparison(leftValue, Number(rightValue), ctx._op.text)) {
            return true;
          }
        }
      }

      return false;
    } else {// ALL or filtered ALL
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {// if we have null values, skip them
          if (!VisitorHelper.checkArithmeticComparison(leftValue, Number(rightValue), ctx._op.text)) {
            return false; // if one is false, everything is false
          }

        }
      }

      return true;
    }
  }

  visitStringComparison(ctx: StringComparisonContext): boolean {
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text);
  }

  visitLeftMVVStringComp(ctx: LeftMVVStringCompContext): boolean {
    const leftValues: any[] = this.visit(ctx._left);
    const rightValue: string = this.visit(ctx._right);
    const accessorText: string = ctx._left.text.toLowerCase();

    if (accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0) {// one is enough
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {
          if (VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text)) {
            return true;
          }
        }
      }

      return false;
    } else {// ALL or filtered ALL
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {// skip null values
          if (!VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text)) {
            return false; // if one is false, everything is false
          }
        }
      }

      return true;
    }

  }

  visitRightMVVStringComp(ctx: RightMVVStringCompContext): boolean {
    const leftValue: string = this.visit(ctx._left);
    const rightValues: any[] = this.visit(ctx._right);
    const accessorText: string = ctx._right.text.toLowerCase();

    if (accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0) {// one is enough
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {
          if (VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text)) {
            return true;
          }
        }
      }

      return false;
    } else {// ALL or filtered ALL
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {// skip null values
          if (!VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text)) {
            return false; // if one is false, everything is false
          }
        }
      }
      return true;
    }
  }


  /* Exists Functions*/
  visitExistsCS(ctx: ExistsCSContext): boolean {
    return this.checkIfSolutionExists(VisitorHelper.extractConcreteSolutionUri(ctx._cs.text));
  }

  visitExistsCap(ctx: ExistsCapContext): boolean {
    if (ctx.ANY()) {
      return this.checkIfCapabilityExists(ctx._cap.text);
    }

    return this.checkIfCapabilityExists(ctx._cap.text, VisitorHelper.extractConcreteSolutionUri(ctx._cs.text));
  }

  visitExistsVal(ctx: ExistsValContext): boolean {
    let type: LITERAL_TYPE;
    if (ctx.BOOL_CONSTANT()) {
      type = LITERAL_TYPE.BOOLEAN;
    } else if (ctx.SCIENTIFIC_NUMBER()) {
      type = LITERAL_TYPE.NUMERIC;
    } else {
      type = LITERAL_TYPE.STRING;
    }

    if (ctx.ANY()) {
      return this.checkIfValueExists(ctx._cap.text, ctx._property.text, ctx._value.text, type);
    }

    return this.checkIfValueExists(ctx._cap.text, ctx._property.text,
      ctx._value.text, type, VisitorHelper.extractConcreteSolutionUri(ctx._cs.text));
  }


  /* Arithmetic Functions*/
  visitArithmeticFunc(ctx: ArithmeticFuncContext): any {

    if (ctx.SUM()) {
      return this.sumVariableValues(ctx._cap.text, ctx._property.text);
    }

    if (ctx.COUNT()) {
      return this.countVariable(ctx._cap.text, ctx._property.text);
    }

    if (ctx.AVG()) {
      return this.averageVariable(ctx._cap.text, ctx._property.text);
    }

    console.error('unsupported arithmetic aggregation function ' + ctx._func.text);

  }


  /*Binary Operators*/
  visitBinaryBoolOp(ctx: BinaryBoolOpContext): boolean {

    if (ctx.OR()) {
      return this.visit(ctx._left) || this.visit(ctx._right);
    }
    if (ctx.AND()) {
      return this.visit(ctx._left) && this.visit(ctx._right);
    }

    console.error('unsupported binary boolean expression ' + ctx._op);


  }

  visitBinaryArithmeticOp(ctx: BinaryArithmeticOpContext): number {

    switch (ctx._op.text) {
      case '+':
        return this.visit(ctx._left) + this.visit(ctx._right);
      case '-':
        return this.visit(ctx._left) - this.visit(ctx._right);
      case '*':
        return this.visit(ctx._left) * this.visit(ctx._right);
      case '/':
        return this.visit(ctx._left) / this.visit(ctx._right);
      default:
        console.error('unsupported binary arithmetic operation ' + ctx._op);
    }
  }


  /*Unary Operators*/
  visitUnaryBoolOp(ctx: UnaryBoolOpContext): boolean {
    if (ctx.NOT()) {
      return !this.visit(ctx._exp);
    }

    if (ctx._op.text === '(') {
      return this.visit(ctx._exp);
    }

    console.error('unsupported unary boolean expression ' + ctx._op);
  }

  visitUnaryArithmeticOp(ctx: UnaryArithmeticOpContext): number {

    switch (ctx._op.text) {
      case '+':
      case '(':
        return this.visit(ctx._exp);
      case '-':
        return -this.visit(ctx._exp);
      default:
        console.error('unsupported unary arithmetic operation ' + ctx._op);
    }
  }


  /*Constants*/
  visitArithmeticConstant(ctx: ArithmeticConstantContext): number {
    return Number(ctx._atom.text);
  }

  visitStringAtom(ctx: StringAtomContext): string {
    return VisitorHelper.parseStringLiteral(ctx._atom.text);
  }

  visitBoolConstant(ctx: BoolConstantContext): boolean {
    return ctx.text.toLowerCase() === 'true';
  }


  /*Variables*/
  visitBoolMVV(ctx: BoolMVVContext) {
    const values: any[] = this.visit(ctx.multiValueVariable());
    const accessorText: string = ctx.multiValueVariable().text.toLowerCase();

    if (accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0) {
      for (const item of values) {
        if (!isNullOrUndefined(item)) {// ignore nulls
          if (item.toLowerCase() === 'true') {
            return true;
          }
        }
      }

      return false;
    } else {// all or all[filter]
      for (const item of values) {
        if (!isNullOrUndefined(item)) {// skip nulls
          if (item.toLowerCase() !== 'true') {
            return false;
          }
        }
      }
      return true;
    }

  }

  visitBoolVariable(ctx: BoolVariableContext): boolean {
    const concreteSolutionUri: string = VisitorHelper.extractConcreteSolutionUri(ctx.CS().text);
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if (result === null) {
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Boolean(result);
  }

  visitArithmeticVariable(ctx: ArithmeticVariableContext): number {
    const concreteSolutionUri: string = VisitorHelper.extractConcreteSolutionUri(ctx.CS().text);
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if (result === null) {
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Number(result);
  }

  visitStringVariable(ctx: StringVariableContext): string {
    const concreteSolutionUri: string = VisitorHelper.extractConcreteSolutionUri(ctx.CS().text);
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if (result === null) {
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return result;
  }

  /**
   * gets the array of all concrete solutions, filters it if necessary
   * and then gets the values of the specified capability.
   * */
  visitMvv(ctx: MvvContext): any[] {
    let solutions: string[];

    if (ctx.NEIGHBOR()) {
      const n1 = this.context.getPreviousSolution(this.solutionUriOfRequirement);
      const n2 = this.context.getNextSolution(this.solutionUriOfRequirement);

      solutions = [];

      if (!isNullOrUndefined(n1)) {
        solutions.push(n1.uri);
      }

      if (!isNullOrUndefined(n2)) {
        solutions.push(n2.uri);
      }
    } else {
      solutions = this.context.getAllConcreteSolutionsUris();
    }
    if (ctx.fBooleanExpression()) {// ALL[fBooleanExpression].cap.val
      solutions = this.filter(solutions, ctx.fBooleanExpression());
    }
    const result: any[] = [];
    let value: any;

    for (const cs of solutions) {
      value = this.getVariableValue(cs, ctx._capability.text, ctx._property.text);
      result.push(value);
    }

    return result;
  }


  /* Filter Expressions */

  /* Filter Comparisons */
  visitFArithmeticComparison(ctx: FArithmeticComparisonContext): boolean {
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return VisitorHelper.checkArithmeticComparison(leftValue, rightValue, ctx._op.text);
  }

  visitFStringComparison(ctx: FStringComparisonContext): boolean {
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return VisitorHelper.checkStringComparison(leftValue, rightValue, ctx._op.text);
  }

  /*Filter Binary Operators*/
  visitFBinaryBoolOp(ctx: FBinaryBoolOpContext): boolean {
    if (ctx.OR()) {
      return this.visit(ctx._left) || this.visit(ctx._right);
    }
    if (ctx.AND()) {
      return this.visit(ctx._left) && this.visit(ctx._right);
    }

    console.error('unsupported binary boolean expression ' + ctx._op);
  }

  visitFBinaryArithmeticOp(ctx: FBinaryArithmeticOpContext): number {
    switch (ctx._op.text) {
      case '+':
        return this.visit(ctx._left) + this.visit(ctx._right);
      case '-':
        return this.visit(ctx._left) - this.visit(ctx._right);
      case '*':
        return this.visit(ctx._left) * this.visit(ctx._right);
      case '/':
        return this.visit(ctx._left) / this.visit(ctx._right);
      default:
        console.error('unsupported binary arithmetic operation ' + ctx._op);
    }
  }


  /*Filter Unary Operators*/
  visitFUnaryBoolOp(ctx: FUnaryBoolOpContext): boolean {
    if (ctx.NOT()) {
      return !this.visit(ctx._exp);
    }

    if (ctx._op.text === '(') {
      return this.visit(ctx._exp);
    }

    console.error('unsupported unary boolean expression ' + ctx._op);
  }

  visitFUnaryArithmeticOp(ctx: FUnaryArithmeticOpContext): number {
    switch (ctx._op.text) {
      case '+':
      case '(':
        return this.visit(ctx._exp);
      case '-':
        return -this.visit(ctx._exp);
      default:
        console.error('unsupported unary arithmetic operation ' + ctx._op);
    }
  }


  /*Filter Constants*/
  visitFArithmeticConstant(ctx: FArithmeticConstantContext): number {
    return Number(ctx._atom.text);
  }

  visitFStringAtom(ctx: FStringAtomContext): string {
    return VisitorHelper.parseStringLiteral(ctx._atom.text);
  }

  visitFBoolConstant(ctx: FBoolConstantContext): boolean {
    return ctx.text.toLowerCase() === 'true';
  }


  /*Filter Variables*/

  visitFBoolVariable(ctx: FBoolVariableContext): boolean {
    const concreteSolutionUri: string = this.currentCSId;
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);


    if (result === null) {// this is acceptable, just skip the CS
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Boolean(result);
  }

  visitFArithmeticVariable(ctx: FArithmeticVariableContext): number {
    const concreteSolutionUri: string = this.currentCSId;
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if (result === null) {// this is acceptable, just skip the CS
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Number(result);
  }

  visitFStringVariable(ctx: FStringVariableContext): string {
    const concreteSolutionUri: string = this.currentCSId;
    const result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if (result === null) {
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return result;
  }

}
