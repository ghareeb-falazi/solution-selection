import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {RequirementsGrammarVisitor} from "./requirements-grammar/RequirementsGrammarVisitor";
import {
  ArithmeticConstantContext,
  BinaryArithmeticOpContext,
  StringConstantContext,
  UnaryArithmeticOpContext,
  UnaryBoolOpContext,
  BoolConstantContext,
  StringComparisonContext,
  ArithmeticComparisonContext,
  BinaryBoolOpContext,
  BoolVariableContext, ArithmeticVariableContext, StringVariableContext
} from "./requirements-grammar/RequirementsGrammarParser";
import {ContextModel} from "../data-model/context.model";
import {CapabilityModel} from "../data-model/capability.model";


export class MyRequirementsVisitor extends AbstractParseTreeVisitor<any> implements RequirementsGrammarVisitor<any> {

  constructor(private context: ContextModel, private currentSolutionUri: string, private requirementSolutionUri: string) {
    super();
  }

  protected defaultResult() {
    return false;
  }


  /* Helper Methods*/
  getVariableValue(concreteSolutionName: string, capabilityName: string, propertyName: string): any {
    const allCapabilities = this.context.getAllCapabilities();
    if (allCapabilities.has(concreteSolutionName)) {//else cs is not in path
      const caps: CapabilityModel[] = allCapabilities.get(concreteSolutionName);

      for (const cap of caps) {
        if (cap.name === capabilityName && cap.properties.has(propertyName)) {
          return cap.properties.get(propertyName);
        }
      }
    }

    return null;
  }

  extractConcreteSolutionUri(val:string):string{
    const splits:string[] = val.split("'");

    if(splits.length != 3)
      throw new Error(`concrete solution identifier is not well-formatted (${val})`);

    console.debug(`extracted concrete solution ${splits[1]}`);
    return splits[1];
  }


  /*Variables*/
  visitBoolVariable(ctx: BoolVariableContext): boolean {

    let concreteSolutionName: string;
    if (ctx.NEXT())
      concreteSolutionName = this.context.getNextSolution(this.currentSolutionUri).uri;
    else if (ctx.PREVIOUS())
      concreteSolutionName = this.context.getPreviousSolution(this.currentSolutionUri).uri;
    else if (ctx.ANY())
      concreteSolutionName = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionName = ContextModel.INITIAL_CAPABILITIES_KEY;
    else //specific solution is specified
      concreteSolutionName = this.extractConcreteSolutionUri(ctx._cs.text);
    //TODO specifically check if the solution does not exist

    return Boolean(this.getVariableValue(concreteSolutionName, ctx._capability.text, ctx._property.text));

  }

  visitStringVariable(ctx: StringVariableContext): string {

    let concreteSolutionName: string;
    if (ctx.NEXT())
      concreteSolutionName = this.context.getNextSolution(this.currentSolutionUri).uri;
    else if (ctx.PREVIOUS())
      concreteSolutionName = this.context.getPreviousSolution(this.currentSolutionUri).uri;
    else if (ctx.ANY())
      concreteSolutionName = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionName = ContextModel.INITIAL_CAPABILITIES_KEY;
    else //specific solution is specified
      concreteSolutionName = this.extractConcreteSolutionUri(ctx._cs.text);

    return this.getVariableValue(concreteSolutionName, ctx._capability.text, ctx._property.text);
  }

  visitArithmeticVariable(ctx: ArithmeticVariableContext): number {
    let concreteSolutionName: string;
    if (ctx.NEXT())
      concreteSolutionName = this.context.getNextSolution(this.currentSolutionUri).uri;
    else if (ctx.PREVIOUS())
      concreteSolutionName = this.context.getPreviousSolution(this.currentSolutionUri).uri;
    else if (ctx.ANY())
      concreteSolutionName = this.currentSolutionUri;
    else if (ctx.INITIAL_CAPABILITY())
      concreteSolutionName = ContextModel.INITIAL_CAPABILITIES_KEY;
    else //specific solution is specified
      concreteSolutionName = this.extractConcreteSolutionUri(ctx._cs.text);

    return Number(this.getVariableValue(concreteSolutionName, ctx._capability.text, ctx._property.text));
  }



  /*Constants*/
  visitBoolConstant(ctx: BoolConstantContext): boolean {
    //console.debug('visitBoolAtom');
    //it is a bool constant "true" or "false"
    return ctx.text.toLowerCase() === 'true';

  }

  visitArithmeticConstant(ctx: ArithmeticConstantContext): number {
    //console.debug('visitarithmeticAtom');
    if (ctx.SCIENTIFIC_NUMBER()) {
      //console.debug(`${ctx._atom.text} is ${numericResult}`);
      return Number(ctx._atom.text);
    }
  }

  visitStringConstant(ctx: StringConstantContext): string {
    return ctx._atom.text.substr(1, ctx._atom.text.length - 2);
  }



  /*Binary Ops*/
  visitBinaryBoolOp(ctx: BinaryBoolOpContext): boolean {
    //console.debug('visitBinaryBoolOp');
    switch (ctx._op.text.toLowerCase()) {
      case 'or':
        return this.visit(ctx._left) || this.visit(ctx._right);
      case 'and':
        return this.visit(ctx._left) && this.visit(ctx._right);
      default:
        console.error('unsupported binary boolean expression ' + ctx._op);

    }
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



  /*Unary Op*/
  visitUnaryBoolOp(ctx: UnaryBoolOpContext): boolean {
    //console.debug('visitUnaryBoolOp');
    switch (ctx._op.text.toLowerCase()) {
      case 'not':
        return !this.visit(ctx._exp);
      case '(':
        return this.visit(ctx._exp);
      default:
        console.error('unsupported unary boolean expression ' + ctx._op);
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



  /*Comparisons*/
  visitArithmeticComparison(ctx: ArithmeticComparisonContext): boolean {
    //console.debug('visitArithmeticComparison');
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
        return this.visit(ctx._left) === this.visit(ctx._right);
      case '<>':
        return this.visit(ctx._left) !== this.visit(ctx._right);
      default:
        console.error('unsupported arithmetic comparison ' + ctx._op);
    }
  }

  visitStringComparison(ctx: StringComparisonContext): boolean {
    //console.debug('visitStringComparison');
    switch (ctx._op.text) {
      case '=':
        return this.visit(ctx._left) === this.visit(ctx._right);
      case '<>':
        return this.visit(ctx._left) !== this.visit(ctx._right);

      default:
        console.error('unsupported string comparison ' + ctx._op);
    }
  }

}
