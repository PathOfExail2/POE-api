import { Controller, Post, Get, Body, Res } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import type { Response } from 'express';
import { CreatedCurrencyDto } from '../dto';
import { AdminsCurrenciesService } from '../application/currencies.service';

@Controller()
export class AdminsCurrenciesController {
  constructor(
    private readonly context: DddContext,
    private readonly adminsCurrenciesService: AdminsCurrenciesService
  ) {}

  @Post()
  async post(@Body() createdCurrencyDto: CreatedCurrencyDto, @Res() res: Response) {
    // 1. Get body, params, querystring
    const body = createdCurrencyDto;
    const { txId } = res.locals;

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    await this.adminsCurrenciesService.create({ ...body });

    // 4. Send response
    return res.json({});
  }

  @Get()
  async get(@Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals;

    // 2. Get container service
    this.context.set(txId);
    // 3. Get service result
    const data = await this.adminsCurrenciesService.list({});

    // 4. Send response
    return res.json({ data });
  }
}
