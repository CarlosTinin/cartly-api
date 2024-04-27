export abstract class HttpException extends Error {
  message: string;
  statusCode: number;
  errorCode: ErrorCode;
  errors: any;

  constructor(message: string, errorCode: ErrorCode, statusCode: number, errors: any,) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
    this.errorCode = errorCode;
  }
}

export enum ErrorCode {
  USER_NOT_FOUND = 101,
  USER_ALREADY_EXISTS = 102,
  UNPROCESSABLE_CONTENT = 201,
  INTERNAL_ERROR = 301
}
