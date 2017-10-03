/**
 * A custom error types for mismatching variable types
 */
export class VariableTypeError extends Error {
  constructor(public inner:Error, message:string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, VariableTypeError.prototype);
  }
}
