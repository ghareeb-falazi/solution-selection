import {GlobalConditionsGrammarVisitor} from "./global-conditions-grammar/GlobalConditionsGrammarVisitor";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {
  ArithmeticConstantContext, ArithmeticComparisonContext, ArithmeticFuncContext, BinaryArithmeticOpContext,
  BinaryBoolOpContext, BoolConstantContext,

  StringAtomContext,
  StringComparisonContext,
  UnaryArithmeticOpContext, UnaryBoolOpContext, BooleanVariableContext, ExistsCSContext, ExistsCapContext,
  ExistsValContext, ArithmeticVariableContext, StringVariableContext
} from "./global-conditions-grammar/GlobalConditionsGrammarParser";
import {ContextModel} from "../data-model/context.model";

import {VariableTypeError} from "./variable-type.error";
import {isNumeric} from "rxjs/util/isNumeric";
import {VariableNotFoundError} from "./variable-not-found.error";

/**
 * Created by falazigb on 04-Aug-17.
 */

enum LITERAL_TYPE {
  NUMERIC,
  STRING,
  BOOLEAN
}

export class MyGlobalConditionsVisitor extends AbstractParseTreeVisitor<any> implements GlobalConditionsGrammarVisitor<any> {

  constructor(private context: ContextModel, private currentSolutionUri: string) {
    super();
  }

  protected defaultResult() {
    return false;
  }

  /*Helper Methods*/
  extractConcreteSolutionUri(val:string):string{
    const splits:string[] = val.split("'");

    if(splits.length != 3)
      throw new Error(`concrete solution identifier is not well-formatted (${val})`);

    console.debug(`extracted concrete solution ${splits[1]}`);
    return splits[1];
  }

  getVariableValue(concreteSolutionName: string, capabilityName: string, propertyName: string): any {
    const caps = this.context.getCapabilitiesOfSolution(concreteSolutionName);
    //console.debug(caps);
    if (caps) {//else cs is not in path
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {
          return cap.properties.get(propertyName);
        }
      }
    }

    return null;
  }

  isPropertyValueEqualsValue(propertyValue: string, value: any, type: LITERAL_TYPE): boolean {
    switch (type) {
      case LITERAL_TYPE.BOOLEAN:
        if (propertyValue.toLowerCase() === "false" || propertyValue.toLowerCase() === "true") {
          return Boolean(propertyValue) === Boolean(value);
        }
      case LITERAL_TYPE.NUMERIC:
        if (isNumeric(propertyValue)) {
          return Number(propertyValue) === Number(value);
        }
      case LITERAL_TYPE.STRING:
        return propertyValue === this.parseStringLiteral(value);
    }

    return false;
  }

  checkIfValueExists(capabilityName: string, propertyName: string, value: any, type: LITERAL_TYPE, concreteSolutionUri?: string): boolean {
    if (concreteSolutionUri) {//a solution is specified
      const caps = this.context.getCapabilitiesOfSolution(concreteSolutionUri);

      if (caps) {//otherwise the solution is not found or has no caps
        for (const cap of caps) {
          if (cap.name === capabilityName && cap.properties.has(propertyName)) {
            if (this.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type))
              return true;
          }
        }
      }
    }
    else {//no concrete solution is specified
      for (const sol of this.context.getAllCapabilities().values()) {
        for (const cap of sol) {
          if (cap.name === capabilityName && cap.properties.has(propertyName))
            if (this.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type))
              return true;
        }
      }
    }

    return false;
  }

  checkIfCapabilityExists(capabilityName: string, concreteSolution?: string): boolean {
    if (concreteSolution) {//a concrete solution is specified
      const caps = this.context.getCapabilitiesOfSolution(concreteSolution);

      if (caps) {
        for (const cap of caps) {
          if (cap.name === capabilityName)
            return true;
        }
      }
    }
    else {//we need to look through solutions
      for (const caps of this.context.getAllCapabilities().values()) {
        for (const cap of caps) {
          if (cap.name === capabilityName)
            return true;
        }
      }
    }

    return false;
  }

  checkIfSolutionExists(concreteSolution: string): boolean {
    return this.context.getAllConcreteSolutionsUris().indexOf(concreteSolution) >= 0;
  }

  countVariable(capabilityName: string, propertyName: string): number {
    console.debug(`Counting variable ${capabilityName}.${propertyName}`);
    let count: number = 0.0;
    let currentValue: number;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {//only sum if the capability has the variable
          count += 1;
        }
      }
    }

    return count;
  }

  sumVariableValues(capabilityName: string, propertyName: string): number {
    console.debug(`Summing variable ${capabilityName}.${propertyName}`);
    let sum: number = 0.0;
    let currentValue: number;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {//only sum if the capability has the variable
          if (!isNumeric(cap.properties.get(propertyName))) {
            console.error(caps);
            throw new VariableTypeError(null, `The type of variable ${capabilityName}.${propertyName} is not numeric!`);
          }
          currentValue = Number(cap.properties.get(propertyName));
          sum += currentValue;
        }
      }
    }

    return sum;
  }

  averageVariable(capabilityName: string, propertyName: string): number {
    console.debug(`Averaging variable ${capabilityName}.${propertyName}`);
    let sum: number = 0.0;
    let count: number = 0;
    let currentValue: number;

    for (const caps of this.context.getAllCapabilities().values()) {
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {//only sum if the capability has the variable
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

  parseStringLiteral(literalText: string): string {
    return literalText.substr(1, literalText.length - 2);
  }


  /* Comparison */
  visitArithmeticComparison(ctx: ArithmeticComparisonContext): boolean {
    //console.debug('visitArithmeticComparison');
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    switch (ctx._op.text) {
      case '<':
        return leftValue < rightValue;
      case '<=':
        return leftValue <= rightValue;
      case '>':
        return leftValue > rightValue;
      case '>=':
        return leftValue >= rightValue;
      case '=':
        return leftValue === rightValue;

      case '<>':
        return leftValue !== rightValue;

      default:
        console.error('unsupported arithmetic comparison ' + ctx._op);
    }
  }

  visitStringComparison(ctx: StringComparisonContext): boolean {
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    let result = false;
    switch (ctx._op.text) {
      case '=':
        result = leftValue === rightValue;
        break;
      case '<>':
        result = leftValue !== rightValue;
        break;

      default:
        console.error('unsupported string comparison ' + ctx._op);
    }
    //console.debug(`visitStringComparison: ${leftValue} ${ctx._op.text} ${rightValue} = ${result}`);
    return result;
  }



  /* Exists Functions*/
  visitExistsCS(ctx: ExistsCSContext): boolean {
    return this.checkIfSolutionExists(this.extractConcreteSolutionUri(ctx._cs.text));
  }

  visitExistsCap(ctx: ExistsCapContext): boolean {
    if (ctx.ANY())
      return this.checkIfCapabilityExists(ctx._cap.text);

    if (ctx.INITIAL_CAPABILITY())
      return this.checkIfCapabilityExists(ctx._cap.text, ContextModel.INITIAL_CAPABILITIES_KEY);

    return this.checkIfCapabilityExists(ctx._cap.text, this.extractConcreteSolutionUri(ctx._cs.text));
  }

  visitExistsVal(ctx: ExistsValContext): boolean {
    let type: LITERAL_TYPE;
    if (ctx.BOOL_CONSTANT())
      type = LITERAL_TYPE.BOOLEAN;
    else if (ctx.SCIENTIFIC_NUMBER())
      type = LITERAL_TYPE.NUMERIC;
    else
      type = LITERAL_TYPE.STRING;

    if (ctx.ANY())
      return this.checkIfValueExists(ctx._cap.text, ctx._property.text, ctx._value.text, type);

    if (ctx.INITIAL_CAPABILITY())
      return this.checkIfValueExists(ctx._cap.text, ctx._property.text, ctx._value.text, type, ContextModel.INITIAL_CAPABILITIES_KEY);

    return this.checkIfValueExists(ctx._cap.text, ctx._property.text, ctx._value.text, type, this.extractConcreteSolutionUri(ctx._cs.text));
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
    //console.debug('visitBinaryBoolOp');
    if (ctx.OR())
      return this.visit(ctx._left) || this.visit(ctx._right);
    if (ctx.AND())
      return this.visit(ctx._left) && this.visit(ctx._right);

    console.error('unsupported binary boolean expression ' + ctx._op);


  }

  visitBinaryArithmeticOp(ctx: BinaryArithmeticOpContext): number {
    //console.debug('visitBinaryArithmeticOp');

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
    //console.debug('visitUnaryBoolOp');

    if (ctx.NOT())
      return !this.visit(ctx._exp);

    if (ctx._op.text === '(')
      return this.visit(ctx._exp);

    console.error('unsupported unary boolean expression ' + ctx._op);
  }

  visitUnaryArithmeticOp(ctx: UnaryArithmeticOpContext): number {
    //console.debug('visitUnaryArithmeticOp');
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
    return this.parseStringLiteral(ctx._atom.text);
  }

  visitBoolConstant(ctx: BoolConstantContext): boolean {
    return ctx.text.toLowerCase() === 'true';
  }



  /*Variables*/
  visitBooleanVariable(ctx: BooleanVariableContext): boolean {
    let concreteSolutionUri: string;
    if (ctx.ALL())
      concreteSolutionUri = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionUri = ContextModel.INITIAL_CAPABILITIES_KEY;
    else
      concreteSolutionUri = this.extractConcreteSolutionUri(ctx._cs.text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if(result === null && ctx.ALL())//this is fine! just skip the current concrete solution
      throw new VariableNotFoundError(null, `Variable ${ctx._cap.text}.${ctx._property.text} not found in capability ${concreteSolutionUri}`);

    return Boolean(result);
  }

  visitArithmeticVariable(ctx: ArithmeticVariableContext): number {
    let concreteSolutionUri: string;
    if (ctx.ALL())
      concreteSolutionUri = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionUri = ContextModel.INITIAL_CAPABILITIES_KEY;
    else
      concreteSolutionUri = this.extractConcreteSolutionUri(ctx._cs.text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);
    //console.debug(`returned result ${result}`);

    if(result === null){
      if(ctx.ALL())//this is fine! just skip the current concrete solution
        throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
      else
        throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Number(result);
  }

  visitStringVariable(ctx: StringVariableContext): string {
    let concreteSolutionUri: string;
    if (ctx.ALL())
      concreteSolutionUri = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionUri = ContextModel.INITIAL_CAPABILITIES_KEY;
    else
      concreteSolutionUri = this.extractConcreteSolutionUri(ctx._cs.text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if(result === null && ctx.ALL())//this is fine! just skip the current concrete solution
      throw new VariableNotFoundError(null, `Variable ${ctx._cap.text}.${ctx._property.text} not found in capability ${concreteSolutionUri}`);

    return result;
  }
}
