import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('/ping')
export class PingController {
  constructor(private pingService: PingService) {}

  @Get()
  async getPong() {
    return this.pingService.getPong();
  }
}
