import { Injectable } from '@nestjs/common';
import { DddRepository } from '@libs/ddd';
import { Currency } from '../../../../common/domain/currency/currency.entity';

@Injectable()
export class GeneralsCurrenciesRepository extends DddRepository<Currency> {
  entityClass = Currency;

  async find({
    id,
    name,
    description,
    imageId,
  }: {
    id?: number;
    name?: string;
    description?: NamedCurve;
    imageId?: string;
  }) {
    return this.entityManager.find(this.entityClass, {
      where: {
        id,
        name,
        description,
        imageId,
      },
    });
  }

  async count({
    id,
    name,
    description,
    imageId,
  }: {
    id?: number;
    name?: string;
    description?: NamedCurve;
    imageId?: string;
  }) {
    return this.entityManager.count(this.entityClass, {
      where: {
        id,
        name,
        description,
        imageId,
      },
    });
  }
}
