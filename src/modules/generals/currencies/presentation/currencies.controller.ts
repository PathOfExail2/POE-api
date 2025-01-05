import { Controller, Get, Res } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import type { Response } from 'express';
import { GeneralsCurrenciesService } from '../application/currencies.service';

@Controller()
export class GeneralsCurrenciesController {
  constructor(
    private readonly context: DddContext,
    private readonly generalsCurrenciesService: GeneralsCurrenciesService
  ) {}

  @Get()
  async list(@Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals as { txId: string };

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    const data = await this.generalsCurrenciesService.list();

    // 4. Send response
    return res.json({ data });
  }
}
