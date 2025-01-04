import { Controller, Get } from '@nestjs/common';

@Controller()
export class GeneralsCurrenciesController {
  @Get()
  async list() {
    return 'hi';
  }
}
