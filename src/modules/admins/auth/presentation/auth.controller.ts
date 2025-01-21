import { Body, Controller, Post, Res } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import type { Response } from 'express';
import { AdminsAuthService } from '../application/auth.service';
import { GetAccessTokenDto } from '../dto';

@Controller()
export class AdminsAuthController {
  constructor(
    private readonly context: DddContext,
    private readonly adminsAuthService: AdminsAuthService
  ) {}

  @Post()
  async post(@Body() getAccessTokenDto: GetAccessTokenDto, @Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals;
    const body = getAccessTokenDto;

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    const data = await this.adminsAuthService.getAccessToken({ ...body });

    // 4. Send response
    return res.json({ data });
  }
}
