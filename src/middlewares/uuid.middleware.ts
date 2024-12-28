import type { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export function uuidMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.locals.txId = req.get('x-request-id') || uuid();
  next();
}
