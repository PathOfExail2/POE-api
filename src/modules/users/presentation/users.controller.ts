import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { DddContext } from '../../../libs/ddd/ddd-context';
import { Response } from 'express';
import { CreateUserDto } from '../dto';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly context: DddContext,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async list(@Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals as { txId: string };

    // 2. Get container service
    this.context.of(txId);

    // 3. Get service result
    const data = await this.usersService.list();

    // 4. Send response
    return res.json({ data });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    // 1. Get body, params, querystring
    const { txId } = res.locals as { txId: string };

    // 2. Get container service
    this.context.of(txId);

    // 3. Get service result
    await this.usersService.create();

    // 4. Send response
    return res.json({});
  }
}
