import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { getContextLogger, logger } from '@libs/logger';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;

      if (res.statusCode < 400) {
        logger.child(getContextLogger(req, res)).info(`success!😏 - ${duration}ms`);
      }
    });
    next();
  }
}
