import { Module } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import { AdminsCurrenciesIdController } from './presentation/id.controller';
import { AdminsCurrenciesIdService } from './application/id.service';
import { AdminsCurrenciesIdRepository } from './infrastructure/id.repository';

@Module({
  controllers: [AdminsCurrenciesIdController],
  providers: [AdminsCurrenciesIdService, AdminsCurrenciesIdRepository, DddContext],
})
export class AdminsCurrenciesIdModule {}
