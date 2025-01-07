import { Module } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import { AdminsCurrenciesController } from './presentation/currencies.controller';
import { AdminsCurrenciesService } from './application/currencies.service';
import { AdminsCurrenciesRepository } from './infrastructure/currencies.repository';

@Module({
  controllers: [AdminsCurrenciesController],
  providers: [AdminsCurrenciesService, AdminsCurrenciesRepository, DddContext],
})
export class AdminsCurrenciesModule {}
