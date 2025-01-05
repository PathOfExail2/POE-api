import { Injectable } from '@nestjs/common';
import { DddRepository } from '@libs/ddd';
import { Currency } from '../../../../common/domain/currency/currency.entity';

@Injectable()
export class GeneralsCurrenciesRepository extends DddRepository<Currency> {
  entityClass = Currency;

  async find() {
    return this.entityManager.find(this.entityClass, { where: {} });
  }
}
