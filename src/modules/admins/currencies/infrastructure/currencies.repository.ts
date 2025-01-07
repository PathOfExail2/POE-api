import { Injectable } from '@nestjs/common';
import { DddRepository } from '../../../../libs/ddd';
import { Currency } from '../../../../common/domain/currency/currency.entity';

@Injectable()
export class AdminsCurrenciesRepository extends DddRepository<Currency> {
  entityClass = Currency;
}
