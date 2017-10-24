/**
 * Base type for boolean expressions
 */
export abstract class BooleanExpressionModel{

  /**
   * Initializes an instance of the BooleanExpressionModel class
   * @param {string} expression the boolean expression
   */
  constructor(public expression: string) {
    this.expression = expression;
  }
}
