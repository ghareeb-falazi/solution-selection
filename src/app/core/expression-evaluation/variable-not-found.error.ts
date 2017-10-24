/**
 * A custom error type thrown when an expected property of a capability is not found in the current context
 */
export class VariableNotFoundError extends Error {
  constructor(public inner: Error, message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, VariableNotFoundError.prototype);
  }
}

