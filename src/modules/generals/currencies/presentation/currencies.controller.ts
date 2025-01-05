import { Controller, Get } from '@nestjs/common';
import { DddContext } from '@libs/ddd';

@Controller()
export class GeneralsCurrenciesController {
  constructor(private readonly context: DddContext) {}

  @Get()
  async list() {
    return 'hi';
  }
}
