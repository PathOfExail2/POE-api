import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { getContextLogger, logger } from '../libs/logger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const customError = {
      message: '',
    };
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (exception instanceof BadRequestException) {
      customError.message = exception.getResponse()['message'];
    }

    logger
      .child(getContextLogger(request, response, exception))
      .error(customError.message);

    response.status(400).json({
      data: { message: customError.message, statusCode: status },
    });
  }
}
