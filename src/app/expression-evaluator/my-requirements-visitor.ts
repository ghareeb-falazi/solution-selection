import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {SimpleGrammarVisitor} from "./requirements-grammar/SimpleGrammarVisitor";
import {
  ArithmeticAtomContext, BinaryArithmeticOpContext, StringAtomContext,
  UnaryArithmeticOpContext, UnaryBoolOpContext, BoolAtomContext, StringComparisonContext, ArithmeticComparisonContext,
  BinaryBoolOpContext
} from "./requirements-grammar/SimpleGrammarParser";



export class MyRequirementsVisitor extends AbstractParseTreeVisitor<any> implements SimpleGrammarVisitor<any> {


  constructor(protected variables: Map<string, string>) {
    super();
  }

  getVariableValue(variableName: string): any {
    if (this.variables.has(variableName)) {
      return this.variables.get(variableName);
    }

    return null;
  }

  protected defaultResult() {
    return false;
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
      result = ctx._atom.text.substr(1, ctx._atom.text.length - 2);
      return result;
    }

    console.error('unsupported string atom ' + ctx._atom);
  }

}
