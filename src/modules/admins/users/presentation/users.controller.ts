import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { DddContext } from '@libs/ddd';
import { AdminsUsersService } from '../application/users.service';
import { CreatedUserDto } from '../dto';

@Controller()
export class AdminsUsersController {
  constructor(
    private readonly context: DddContext,
    private readonly adminsUsersService: AdminsUsersService
  ) {}

  @Post()
  async post(@Body() createdUserDto: CreatedUserDto, @Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals;
    const body = createdUserDto;

    // 2. Get container service
    this.context.set(txId);

    // 3. Get service result
    await this.adminsUsersService.create({ ...body });

    // 4. Send response
    return res.json({});
  }
}
