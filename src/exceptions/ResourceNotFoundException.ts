import { ErrorCode, HttpException } from "./HttpException";

export class ResourceNotFoundException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 404, null);
  }
}