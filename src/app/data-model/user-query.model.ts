import {BooleanExpressionModel} from './boolean-expression.model';

/**
 * Represents a user query
 */
export class UserQueryModel extends BooleanExpressionModel {
  constructor(expression: string) {
    super(expression);
  }

}
