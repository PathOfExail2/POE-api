import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping/ping.module';

@Module({
  imports: [PingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}