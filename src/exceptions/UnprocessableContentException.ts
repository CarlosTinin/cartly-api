import { ErrorCode, HttpException } from "./HttpException";

export class UnprocessableContentException extends HttpException {
  constructor(message:string, errorCode: ErrorCode, errors:any) {
    super(message, errorCode, 422, errors)
  }
}