/**
 * Created by falazigb on 24-Jul-17.
 */
export class MyParsingError extends Error {
  constructor(public inner:Error, message:string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MyParsingError.prototype);
  }
}
