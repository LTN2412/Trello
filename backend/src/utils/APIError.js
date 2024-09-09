export default class APIError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "API Error";
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.contructor);
  }
}
