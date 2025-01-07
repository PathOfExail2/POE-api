import { Controller, Post, Get, Body } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import { CreatedCurrencyDto } from '../dto';

@Controller()
export class AdminsCurrenciesController {
  constructor(private readonly context: DddContext) {}

  @Post()
  async post(@Body() createdCurrencyDto: CreatedCurrencyDto) {
    return 'hi';
  }

  @Get()
  async get() {}
}
