import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { DddContext } from '../../../../libs/ddd';
import { AdminsRunesService } from '../application/rune.service';

@Controller()
export class AdminsRunesController {
  constructor(
    private readonly context: DddContext,
    private readonly adminsRunesService: AdminsRunesService
  ) {}

  @Get()
  async get(@Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals;

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    const data = await this.adminsRunesService.list();

    // 4. Send response
    return res.json({ data });
  }
}
