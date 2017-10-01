/**
 * Created by falazigb on 05-Aug-17.
 */
export class VariableTypeError extends Error {
  constructor(public inner:Error, message:string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, VariableTypeError.prototype);
  }
}
