export class VariableNotFoundError extends Error {
  constructor(public inner:Error, message:string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, VariableNotFoundError.prototype);
  }
}

