import {GlobalConditionsGrammarVisitor} from "./global-conditions-grammar/GlobalConditionsGrammarVisitor";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {
  ArithmeticAtomContext, ArithmeticComparisonContext, ArithmeticFuncContext, BinaryArithmeticOpContext,
  BinaryBoolOpContext, BoolAtomContext,
  BooleanFuncContext,
  StringAtomContext,
  StringComparisonContext,
  UnaryArithmeticOpContext, UnaryBoolOpContext
} from "./global-conditions-grammar/GlobalConditionsGrammarParser";
import {ContextModel} from "../data-model/context.model";
import {CapabilityModel} from "../data-model/capability.model";
import {waitForMap} from "@angular/router/src/utils/collection";
import {VariableTypeError} from "./variable-type-error";
import {isNumeric} from "rxjs/util/isNumeric";
/**
 * Created by falazigb on 04-Aug-17.
 */

enum LITERAL_TYPE{
  NUMERIC,
  STRING,
  BOOLEAN
}

export class MyGlobalConditionsVisitor extends AbstractParseTreeVisitor<any> implements GlobalConditionsGrammarVisitor<any> {

  constructor(private context: ContextModel, private currentCapability: CapabilityModel) {
    super();
  }

  protected defaultResult() {
    return false;
  }

  getVariableValue(variableName: string): any {
    if (this.currentCapability.properties.has(variableName)) {
      return this.currentCapability.properties.get(variableName);
    }


    return null;
  }

  /* Executes the exists_value boolean function**/
  checkIfVariableValueExists(varName: string, wantedVarVal: any, type: LITERAL_TYPE): boolean {
    console.debug(`Check of variable value exists varName:${varName}, wantedValue:${wantedVarVal}, type:${type}`);
    const caps: CapabilityModel[] = this.context.getAllCapabilities();
    let currentVarValString: string;
    let currentVarVal = null;

    for (const cap of caps) {
      if (cap.properties.has(varName)) {
        currentVarValString = cap.properties.get(varName);

        switch (type) {
          case LITERAL_TYPE.BOOLEAN:
            currentVarVal = Boolean(currentVarValString);
            break;
          case LITERAL_TYPE.NUMERIC:
            currentVarVal = Number(currentVarValString);
            break;
          case LITERAL_TYPE.STRING:
            currentVarVal = currentVarValString;
            break;
        }

        if (currentVarVal === wantedVarVal)
          return true;
      }
    }

    return false;
  }

  countVariable(varName: string): number {
    console.debug(`Counting variable ${varName}`);

    const caps: CapabilityModel[] = this.context.getAllCapabilities();
    let count: number = 0.0;
    let currentValue: number;

    for (const cap of caps) {
      if (cap.properties.has(varName)) {//only sum if the capability has the variable
        count += 1;
      }
    }

    return count;
  }

  sumVariableValues(varName: string): number {
    console.debug(`Summing variable ${varName}`);

    const caps: CapabilityModel[] = this.context.getAllCapabilities();
    let sum: number = 0.0;
    let currentValue: number;

    for (const cap of caps) {
      if (cap.properties.has(varName)) {//only sum if the capability has the variable
        if (!isNumeric(cap.properties.get(varName))) {
          throw new VariableTypeError(null, `The type of variable ${varName} is not numeric!`);
        }
        currentValue = Number(cap.properties.get(varName));
        sum += currentValue;
      }
    }

    return sum;
  }

  averageVariable(varName: string): number {
    console.debug(`Averaging variable ${varName}`);

    const caps: CapabilityModel[] = this.context.getAllCapabilities();
    let sum: number = 0.0;
    let count:number = 0;
    let currentValue: number;

    for (const cap of caps) {
      if (cap.properties.has(varName)) {//only sum if the capability has the variable
        if (!isNumeric(cap.properties.get(varName))) {
          throw new VariableTypeError(null, `The type of variable ${varName} is not numeric!`);
        }
        currentValue = Number(cap.properties.get(varName));
        sum += currentValue;
        count += 1;
      }
    }

    return sum/count;

  }

  parseStringLiteral(literalText: string): string {
    return literalText.substr(1, literalText.length - 2);
  }


  /**
   * Visit a parse tree produced by the `booleanFunc`
   * labeled alternative in `GlobalConditionsGrammarParser.booleanExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleanFunc(ctx: BooleanFuncContext): any {
    switch (ctx._func.text) {
      case 'exists_value':
      case 'EXISTS_VALUE':
        let wantedVarValue = null;
        let type: LITERAL_TYPE;

        if (ctx.STRING_LITERAL()) {
          wantedVarValue = this.parseStringLiteral(ctx.STRING_LITERAL().text);
          type = LITERAL_TYPE.STRING;
        } else if (ctx.SCIENTIFIC_NUMBER()) {
          wantedVarValue = Number(ctx.SCIENTIFIC_NUMBER().text);
          type = LITERAL_TYPE.NUMERIC;
        } else if (ctx.BOOL_CONSTANT()) {
          wantedVarValue = Boolean(ctx.BOOL_CONSTANT().text);
          type = LITERAL_TYPE.BOOLEAN;
        }

        return this.checkIfVariableValueExists(ctx._variable.text, wantedVarValue, type);
      default:
        console.error('unsupported boolean aggregation function ' + ctx._func.text);

    }
  }

  visitArithmeticFunc(ctx: ArithmeticFuncContext): any {
    switch (ctx._func.text) {
      case 'sum':
      case 'SUM':
        return this.sumVariableValues(ctx._variable.text);
      case 'count':
      case 'COUNT':
        return this.countVariable(ctx._variable.text);
      case 'avg':
      case 'AVG':
        return this.averageVariable(ctx._variable.text);
      default:
        console.error('unsupported arithmetic aggregation function ' + ctx._func.text);

    }
  }

  visitBinaryBoolOp(ctx: BinaryBoolOpContext): boolean {
    //console.debug('visitBinaryBoolOp');
    switch (ctx._op.text) {
      case 'OR':
      case 'or':
        return this.visit(ctx._left) || this.visit(ctx._right);
      case 'AND':
      case 'and':
        return this.visit(ctx._left) && this.visit(ctx._right);
      default:
        console.error('unsupported binary boolean expression ' + ctx._op);

    }
  }

  visitUnaryBoolOp(ctx: UnaryBoolOpContext): boolean {
    //console.debug('visitUnaryBoolOp');
    switch (ctx._op.text) {
      case 'not':
      case 'NOT':
        return !this.visit(ctx._exp);
      case '(':
        return this.visit(ctx._exp);
      default:
        console.error('unsupported unary boolean expression ' + ctx._op);
    }
  }

  visitBoolAtom(ctx: BoolAtomContext): boolean {
    //console.debug('visitBoolAtom');
    if (ctx.BOOL_CONSTANT()) {//it is a bool constant "true" or "false"
      return ctx.text.toLowerCase() === 'true';
    }
    return Boolean(this.getVariableValue(ctx._atom.text));
  }

  visitArithmeticComparison(ctx: ArithmeticComparisonContext): boolean {
    //console.debug('visitArithmeticComparison');
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    if (leftValue == null || rightValue == null)//makes sure that when a variable does not exist, the comparison is ignored
      return true;

    switch (ctx._op.text) {
      case '<':
        return this.visit(ctx._left) < this.visit(ctx._right);
      case '<=':
        return this.visit(ctx._left) <= this.visit(ctx._right);
      case '>':
        return this.visit(ctx._left) > this.visit(ctx._right);
      case '>=':
        return this.visit(ctx._left) >= this.visit(ctx._right);
      case '=':
        //console.debug(`${ctx._left.text} === ${ctx._right.text} = ${result}`);

        return this.visit(ctx._left) === this.visit(ctx._right);

      case '<>':
        return this.visit(ctx._left) !== this.visit(ctx._right);

      default:
        console.error('unsupported arithmetic comparison ' + ctx._op);
    }
  }


  visitStringComparison(ctx: StringComparisonContext): boolean {

    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    if (leftValue == null || rightValue == null)//makes sure that when a variable does not exist, the comparison is ignored
      return true;

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
    console.debug(`visitStringComparison: ${leftValue} ${ctx._op.text} ${rightValue} = ${result}`);
    return result;
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

  visitArithmeticAtom(ctx: ArithmeticAtomContext): number {
    //console.debug('visitarithmeticAtom');
    if (ctx.SCIENTIFIC_NUMBER()) {
      //console.debug(`${ctx._atom.text} is ${numericResult}`);
      return Number(ctx._atom.text);
    }

    if (ctx.VARIABLE()) {
      return Number(this.getVariableValue(ctx._atom.text))
    }

    console.error('unsupported arithmetic atom ' + ctx._atom);
  }

  visitStringAtom(ctx: StringAtomContext): string {
    //console.debug('visitStringAtom');
    let result: string;

    if (ctx.VARIABLE()) {
      result = this.getVariableValue(ctx._atom.text);
      return result;
    }

    if (ctx.STRING_LITERAL()) {
      result = this.parseStringLiteral(ctx._atom.text);
      return result;
    }

    console.error('unsupported string atom ' + ctx._atom);
  }

}
