import {LITERAL_TYPE} from './literal-type.enum';
import {isNullOrUndefined} from 'util';
import {isNumeric} from 'rxjs/util/isNumeric';

/**
 * Contains static methods common to requirements parse tree visitor and user query parse tree visitor
 */
export class VisitorHelper {

  /**
   * Extracts the uri from a given string literal (e.g., 'cs3.1' -> cs3.1)
   * @param {string} val
   * @returns {string}
   */
  static extractConcreteSolutionUri(val: string): string {
    const splits: string[] = val.split('\'');

    if (splits.length !== 3) {
      throw new Error(`concrete solution identifier is not well-formatted (${val})`);
    }

    return splits[1];
  }

  /**
   * Compares the value of a property to the value of a literal
   * @param {string} propertyValue
   * @param value
   * @param {LITERAL_TYPE} type
   * @returns {boolean}
   */
  static isPropertyValueEqualsValue(propertyValue: string, value: any, type: LITERAL_TYPE): boolean {
    switch (type) {
      case LITERAL_TYPE.BOOLEAN:
        if (propertyValue.toLowerCase() === 'false' || propertyValue.toLowerCase() === 'true') {
          return Boolean(propertyValue) === Boolean(value);
        }
        break;
      case LITERAL_TYPE.NUMERIC:
        if (isNumeric(propertyValue)) {
          return Number(propertyValue) === Number(value);
        }
        break;
      case LITERAL_TYPE.STRING:
        return propertyValue === VisitorHelper.parseStringLiteral(value);
    }

    return false;
  }

  /**
   * Strips a string literal from single quotes
   * @param {string} literalText
   * @returns {string}
   */
  static parseStringLiteral(literalText: string): string {
    return literalText.substr(1, literalText.length - 2);
  }

  /**
   * Evaluates an arithmetic comparison
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {string} operator
   * @returns {boolean}
   */
  static checkArithmeticComparison(leftValue: number, rightValue: number, operator: string) {
    if (isNullOrUndefined(leftValue) || isNullOrUndefined(rightValue)) {
      return false; // if one of the values does not exist, return false;
    }
    let result: boolean;
    switch (operator) {
      case '<':
        result = leftValue < rightValue;
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


    return result;
  }

  /**
   * Evaluates a string comparison
   * @param {string} leftValue
   * @param {string} rightValue
   * @param {string} operator
   * @returns {boolean}
   */
  static checkStringComparison(leftValue: string, rightValue: string, operator: string) {
    if (isNullOrUndefined(leftValue) || isNullOrUndefined(rightValue)) {
      return false; // if one of the values does not exist, return false;
    }
    let result = false;
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

    return result;
  }


}
