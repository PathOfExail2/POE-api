import { Controller, Get, Res } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import type { Response } from 'express';
import { AdminsCurrenciesIdService } from '../application/id.service';

@Controller()
export class AdminsCurrenciesIdController {
  constructor(
    private readonly context: DddContext,
    private readonly adminsCurrenciesIdService: AdminsCurrenciesIdService
  ) {}

  @Get()
  async get(@Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals;

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    const data = await this.adminsCurrenciesIdService.retrieve();

    // 4. Send response
    return res.json({ data });
  }
}
