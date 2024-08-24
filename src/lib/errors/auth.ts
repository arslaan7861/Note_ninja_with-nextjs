class CustomError extends Error {
  public errorCode: number;

  constructor(message: string, errorCode: number) {
    super(message); // Call the constructor of the base class (Error)
    this.name = this.constructor.name; // Set the error name to the class name
    this.errorCode = errorCode;
    // Object.setPrototypeOf(this, new.target.prototype);
  }
}
class UnauthenticatedError extends CustomError {
  constructor(msg: string) {
    super(msg, 401);
  }
}
class NotfoundError extends CustomError {
  constructor(msg: string) {
    super(msg, 404);
    this.name = this.constructor.name;
  }
}
export { UnauthenticatedError, NotfoundError };
