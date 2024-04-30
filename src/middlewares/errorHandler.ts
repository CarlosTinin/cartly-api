import { Request, Response, NextFunction } from 'express'
import { ErrorCode, HttpException } from '../exceptions/HttpException'
import { InternalException } from'../exceptions/InternalException'
import { UnprocessableContentException } from'../exceptions/UnprocessableContentException'
import { ZodError } from 'zod'

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next)
    } catch(error: any) {
      let exception: HttpException;
      if (error instanceof HttpException) {
        exception = error;
      } else if(error instanceof ZodError)  {
        exception = new UnprocessableContentException("O corpo da requisição está inválido!", ErrorCode.UNPROCESSABLE_CONTENT, error);
      } else {
        exception = new InternalException("Whoops, algo errado!", ErrorCode.INTERNAL_ERROR, error);
      }
      
      next(exception);
    }
  }
}