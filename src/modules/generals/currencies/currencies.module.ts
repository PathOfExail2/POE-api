import { Module } from '@nestjs/common';
import { GeneralsCurrenciesController } from './presentation/currencies.controller';
import { GeneralsCurrenciesService } from './application/currencies.service';
import { DddContext } from '../../../libs/ddd';
import { CommonModule } from '../../../common/common.module';
import { GeneralsCurrenciesRepository } from './infrastructure/currencies.repository';

@Module({
  imports: [CommonModule],
  controllers: [GeneralsCurrenciesController],
  providers: [GeneralsCurrenciesService, GeneralsCurrenciesRepository, DddContext],
})
export class CurrenciesModule {}
