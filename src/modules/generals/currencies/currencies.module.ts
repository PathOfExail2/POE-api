import { Module } from '@nestjs/common';
import { GeneralsCurrenciesController } from './presentation/currencies.controller';
import { GeneralsCurrenciesService } from './application/currencies.service';

@Module({
  controllers: [GeneralsCurrenciesController],
  providers: [GeneralsCurrenciesService],
})
export class CurrenciesModule {}
