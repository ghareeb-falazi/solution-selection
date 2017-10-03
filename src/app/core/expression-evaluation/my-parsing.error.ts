/**
 * A custom error type for parsing errors.
 */
export class MyParsingError extends Error {
  constructor(public inner:Error, message:string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MyParsingError.prototype);
  }
}
