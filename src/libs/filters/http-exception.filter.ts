import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import type { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // TODO: 커스텀 에러 메세지 작성
    const errorObject = exception.getResponse() as {
      message: string;
      error: string;
      statusCode: number;
    };

    response.status(errorObject.statusCode).json({
      statusCode: errorObject.statusCode,
      message: errorObject.message,
      path: request.url,
    });
  }
}
