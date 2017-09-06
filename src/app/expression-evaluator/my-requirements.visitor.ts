import {RequirementsGrammarVisitor} from "./requirements-grammar/RequirementsGrammarVisitor";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
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
} from "./requirements-grammar/RequirementsGrammarParser";
import {ContextModel} from "../data-model/context.model";

import {VariableTypeError} from "./variable-type.error";
import {isNumeric} from "rxjs/util/isNumeric";
import {VariableNotFoundError} from "./variable-not-found.error";
import {isNullOrUndefined} from "util";

enum LITERAL_TYPE {
  NUMERIC,
  STRING,
  BOOLEAN
}

export class MyRequirementsVisitor extends AbstractParseTreeVisitor<any> implements RequirementsGrammarVisitor<any> {
  private currentCSId: string;
  constructor(private context: ContextModel, private solutionUriOfRequirement: string) {
    super();
  }

  protected defaultResult() {
    return false;
  }

  /*Helper Methods*/
  static extractConcreteSolutionUri(val:string):string{
    const splits:string[] = val.split("'");

    if(splits.length != 3)
      throw new Error(`concrete solution identifier is not well-formatted (${val})`);

    console.debug(`extracted concrete solution ${splits[1]}`);
    return splits[1];
  }

  getVariableValue(concreteSolutionName: string, capabilityName: string, propertyName: string): any {
    const caps = this.context.getCapabilitiesOfSolution(concreteSolutionName);
    console.debug(caps);
    if (caps) {//else cs is not in path
      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {
          return cap.properties.get(propertyName);
        }
      }
    }

    return null;
  }

  static isPropertyValueEqualsValue(propertyValue: string, value: any, type: LITERAL_TYPE): boolean {
    switch (type) {
      case LITERAL_TYPE.BOOLEAN:
        if (propertyValue.toLowerCase() === "false" || propertyValue.toLowerCase() === "true") {
          return Boolean(propertyValue) === Boolean(value);
        }
        break;
      case LITERAL_TYPE.NUMERIC:
        if (isNumeric(propertyValue)) {
          return Number(propertyValue) === Number(value);
        }
        break;
      case LITERAL_TYPE.STRING:
        return propertyValue === MyRequirementsVisitor.parseStringLiteral(value);
    }

    return false;
  }

  checkIfValueExists(capabilityName: string, propertyName: string, value: any, type: LITERAL_TYPE, concreteSolutionUri?: string): boolean {
    if (concreteSolutionUri) {//a solution is specified
      const caps = this.context.getCapabilitiesOfSolution(concreteSolutionUri);

      if (caps) {//otherwise the solution is not found or has no caps
        for (const cap of caps) {
          if (cap.name === capabilityName && cap.properties.has(propertyName)) {
            if (MyRequirementsVisitor.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type))
              return true;
          }
        }
      }
    }
    else {//no concrete solution is specified (ANY)
      for (const sol of this.context.getAllCapabilities().values()) {
        for (const cap of sol) {
          if (cap.name === capabilityName && cap.properties.has(propertyName))
            if (MyRequirementsVisitor.isPropertyValueEqualsValue(cap.properties.get(propertyName), value, type))
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
    else {//we need to look through solutions (ANY)
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

  static parseStringLiteral(literalText: string): string {
    return literalText.substr(1, literalText.length - 2);
  }

  static checkArithmeticComparison(leftValue:number, rightValue:number, operator:string){

    if(isNullOrUndefined(leftValue) || isNullOrUndefined(rightValue))
      return false;//if one of the values does not exist, return false;
    let result:boolean;
    switch (operator) {
      case '<':
        result =  leftValue < rightValue;
        break;
      case '<=':
        result = leftValue <= rightValue;
        break;
      case '>':
        result = leftValue > rightValue;
        break;
      case '>=':
        result = leftValue >= rightValue;
        break;
      case '=':
        result = leftValue === rightValue;
        break;

      case '<>':
        result = leftValue !== rightValue;
        break;

      default:
        console.error('unsupported arithmetic comparison ' + operator);
    }

    console.debug(`${leftValue} ${operator} ${rightValue}  = ${result}`);

    return result;
  }

  static checkStringComparison(leftValue:string, rightValue:string, operator:string) {
    if (isNullOrUndefined(leftValue) || isNullOrUndefined(rightValue)){
      return false;//if one of the values does not exist, return false;
    }
    let result:boolean = false;
    switch (operator) {
      case '=':
        result = leftValue === rightValue;
        break;
      case '<>':
        result = leftValue !== rightValue;
        break;

      default:
        console.error('unsupported string comparison ' + operator);
    }

    console.debug(`${leftValue} ${operator} ${rightValue}  = ${result}`);

    return result;
  }

  filter(csUris:string[], filterContext:FBooleanExpressionContext):string[]{
    const result:string[] = [];
    for(const csUri of csUris){
      this.currentCSId = csUri;
      try {
        if(this.visit(filterContext)){//this item is valid
          result.push(this.currentCSId);
        }
      }catch (e) {
        if(!(e instanceof VariableNotFoundError))//otherwise I do not care
          throw e;
      }
    }

    this.currentCSId = null;

    return result;
  }

  /* Comparison */
  visitArithmeticComparison(ctx: ArithmeticComparisonContext): boolean {
    //console.debug('visitArithmeticComparison');
    console.debug('I am in visitArithmeticComparison');
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return MyRequirementsVisitor.checkArithmeticComparison(leftValue, rightValue, ctx._op.text);
  }

  visitLeftMVVArithComp(ctx: LeftMVVArithCompContext): boolean {
    console.debug('I am in visitLeftMVVArithComp');
    const leftValues: any[] = this.visit(ctx._left);
    console.debug(leftValues);
    const rightValue: number = this.visit(ctx._right);
    const accessorText:string = ctx._left.text.toLowerCase();

    if(accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0){ //one is enough
      console.debug('I have detected any');
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {
          if (MyRequirementsVisitor.checkArithmeticComparison(Number(leftValue), rightValue, ctx._op.text)) {
            return true;
          }
        }
      }

      return false;
    } else {//ALL or filtered ALL
      console.debug(`I have not detected any in ${ctx._left.text}`);
      for(const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {//skip null values
          if (!MyRequirementsVisitor.checkArithmeticComparison(Number(leftValue), rightValue, ctx._op.text))
            return false;//if one is false, everything is false
        }
      }

      return true;
    }

  }

  visitRightMVVArithComp(ctx: RightMVVArithCompContext): boolean{
    const leftValue: number = this.visit(ctx._left);
    const rightValues: any[] = this.visit(ctx._right);//null might be within
    const accessorText:string = ctx._right.text.toLowerCase();

    if(accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0){//any or any[filter] : one is enough
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {
          if (MyRequirementsVisitor.checkArithmeticComparison(leftValue, Number(rightValue), ctx._op.text))
            return true;
        }
      }

      return false;
    } else {//ALL or filtered ALL
      for (const rightValue of rightValues) {
        if(!isNullOrUndefined(rightValue)) {//if we have null values, skip them
          if (!MyRequirementsVisitor.checkArithmeticComparison(leftValue, Number(rightValue), ctx._op.text))
            return false;//if one is false, everything is false

        }
      }

      return true;
    }
  }

  visitStringComparison(ctx: StringComparisonContext): boolean {
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);
    //console.debug(`visitStringComparison: ${leftValue} ${ctx._op.text} ${rightValue} = ${result}`);
    return MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text);
  }

  visitLeftMVVStringComp(ctx: LeftMVVStringCompContext): boolean {
    const leftValues: any[] = this.visit(ctx._left);
    const rightValue: string = this.visit(ctx._right);
    const accessorText:string = ctx._left.text.toLowerCase();

    if(accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0){//one is enough
      for (const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {
          if (MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text))
            return true;
        }
      }

      return false;
    } else {//ALL or filtered ALL
      for(const leftValue of leftValues) {
        if (!isNullOrUndefined(leftValue)) {//skip null values
          if (!MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text))
            return false;//if one is false, everything is false
        }
      }

      return true;
    }

  }

  visitRightMVVStringComp(ctx: RightMVVStringCompContext): boolean{
    const leftValue: string = this.visit(ctx._left);
    const rightValues: any[] = this.visit(ctx._right);
    const accessorText:string = ctx._right.text.toLowerCase();

    if(accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0){//one is enough
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {
          if (MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text))
            return true;
        }
      }

      return false;
    } else {//ALL or filtered ALL
      for (const rightValue of rightValues) {
        if (!isNullOrUndefined(rightValue)) {//skip null values
          if (!MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text))
            return false;//if one is false, everything is false
        }
      }
      return true;
    }
  }


  /* Exists Functions*/
  visitExistsCS(ctx: ExistsCSContext): boolean {
    return this.checkIfSolutionExists(MyRequirementsVisitor.extractConcreteSolutionUri(ctx._cs.text));
  }

  visitExistsCap(ctx: ExistsCapContext): boolean {
    if (ctx.ANY())
      return this.checkIfCapabilityExists(ctx._cap.text);

    return this.checkIfCapabilityExists(ctx._cap.text, MyRequirementsVisitor.extractConcreteSolutionUri(ctx._cs.text));
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

    return this.checkIfValueExists(ctx._cap.text, ctx._property.text, ctx._value.text, type, MyRequirementsVisitor.extractConcreteSolutionUri(ctx._cs.text));
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
    return MyRequirementsVisitor.parseStringLiteral(ctx._atom.text);
  }

  visitBoolConstant(ctx: BoolConstantContext): boolean {
    return ctx.text.toLowerCase() === 'true';
  }



  /*Variables*/
  visitBoolMVV(ctx: BoolMVVContext){
    const values:any[] = this.visit(ctx.multiValueVariable());
    console.debug(values);
    const accessorText:string = ctx.multiValueVariable().text.toLowerCase();
    if(accessorText.indexOf('any') >= 0 || accessorText.indexOf('neighbor') >= 0){
      for(const item of values){
        if(!isNullOrUndefined(item)){//ignore nulls
          if(item.toLowerCase() === 'true')
            return true;
        }
      }

      return false;
    }else{//all or all[filter]
      for(const item of values){
        if(!isNullOrUndefined(item)){//skip nulls
          if(item.toLowerCase() !== 'true'){
            return false;
          }
        }
      }
      return true;
    }

  }
  visitBoolVariable(ctx: BoolVariableContext):boolean{
    let concreteSolutionUri: string = MyRequirementsVisitor.extractConcreteSolutionUri(ctx.CS().text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if(result === null){
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Boolean(result);
  }

  visitArithmeticVariable(ctx: ArithmeticVariableContext): number {
    let concreteSolutionUri: string = MyRequirementsVisitor.extractConcreteSolutionUri(ctx.CS().text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);
    //console.debug(`returned result ${result}`);

    if(result === null){
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Number(result);
  }

  visitStringVariable(ctx: StringVariableContext): string {
    let concreteSolutionUri: string = MyRequirementsVisitor.extractConcreteSolutionUri(ctx.CS().text);

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if(result === null){
      throw new Error(`Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return result;
  }

  /**
   * gets the array of all concrete solutions, filters it if necessary
   * and then gets the values of the specified capability.
   * */
  visitMvv(ctx:MvvContext):any[]{

    let solutions:string[];
    if(ctx.NEIGHBOR()) {
      let n1 = this.context.getPreviousSolution(this.solutionUriOfRequirement);
      let n2 = this.context.getNextSolution(this.solutionUriOfRequirement);

      solutions = [];

      if(!isNullOrUndefined(n1)) {
        solutions.push(n1.uri);
      }

      if(!isNullOrUndefined(n2)){
        solutions.push(n2.uri);
      }
    }else {
      solutions = this.context.getAllConcreteSolutionsUris();
    }
    if(ctx.fBooleanExpression()){// ALL[fBooleanExpression].cap.val
      solutions = this.filter(solutions, ctx.fBooleanExpression());
    }
    const result:any[] = [];
    let value:any;
    for(const cs of solutions){
      value = this.getVariableValue(cs, ctx._capability.text, ctx._property.text);
      //console.debug(`value for cs=${cs} is ${value}`);
      result.push(value);
    }

    return result;
  }


  /* Filter Expressions */
  /* Filter Comparisons */
  visitFArithmeticComparison(ctx:FArithmeticComparisonContext):boolean{
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);

    return MyRequirementsVisitor.checkArithmeticComparison(leftValue, rightValue, ctx._op.text);
  }

  visitFStringComparison(ctx:FStringComparisonContext):boolean{
    const leftValue = this.visit(ctx._left);
    const rightValue = this.visit(ctx._right);
    //console.debug(`visitStringComparison: ${leftValue} ${ctx._op.text} ${rightValue} = ${result}`);
    return MyRequirementsVisitor.checkStringComparison(leftValue, rightValue, ctx._op.text);
  }

  /*Filter Binary Operators*/
  visitFBinaryBoolOp(ctx: FBinaryBoolOpContext): boolean {
    //console.debug('visitBinaryBoolOp');
    if (ctx.OR())
      return this.visit(ctx._left) || this.visit(ctx._right);
    if (ctx.AND())
      return this.visit(ctx._left) && this.visit(ctx._right);

    console.error('unsupported binary boolean expression ' + ctx._op);


  }

  visitFBinaryArithmeticOp(ctx: FBinaryArithmeticOpContext): number {
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


  /*Filter Unary Operators*/
  visitFUnaryBoolOp(ctx: FUnaryBoolOpContext): boolean {
    //console.debug('visitUnaryBoolOp');

    if (ctx.NOT())
      return !this.visit(ctx._exp);

    if (ctx._op.text === '(')
      return this.visit(ctx._exp);

    console.error('unsupported unary boolean expression ' + ctx._op);
  }

  visitFUnaryArithmeticOp(ctx: FUnaryArithmeticOpContext): number {
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



  /*Filter Constants*/
  visitFArithmeticConstant(ctx: FArithmeticConstantContext): number {
    return Number(ctx._atom.text);
  }

  visitFStringAtom(ctx: FStringAtomContext): string {
    return MyRequirementsVisitor.parseStringLiteral(ctx._atom.text);
  }

  visitFBoolConstant(ctx: FBoolConstantContext): boolean {
    return ctx.text.toLowerCase() === 'true';
  }



  /*Filter Variables*/

  visitFBoolVariable(ctx: FBoolVariableContext): boolean {
    let concreteSolutionUri: string = this.currentCSId;

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);
    //console.debug(`returned result ${result}`);

    if(result === null){//this is acceptable, just skip the CS
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Boolean(result);
  }

  visitFArithmeticVariable(ctx: FArithmeticVariableContext): number {
    let concreteSolutionUri: string = this.currentCSId;

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);
    //console.debug(`returned result ${result}`);

    if(result === null){//this is acceptable, just skip the CS
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return Number(result);
  }

  visitFStringVariable(ctx: FStringVariableContext): string {
    let concreteSolutionUri: string = this.currentCSId;

    let result = this.getVariableValue(concreteSolutionUri, ctx._cap.text, ctx._property.text);

    if(result === null){
      throw new VariableNotFoundError(null, `Variable ${concreteSolutionUri}.${ctx._cap.text}.${ctx._property.text} not found`);
    }

    return result;
  }

}
