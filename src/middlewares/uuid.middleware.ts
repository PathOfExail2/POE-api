import { NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
import { setTxId } from '../libs/helpers/trace-id';

export class UUIDMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: NextFunction) {
    const txId = req.get('x-request-id') || uuid();
    setTxId(txId);
    next();
  }
}
