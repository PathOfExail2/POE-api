import { DataSource, EntityManager, ObjectType } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { DddAggregate } from './ddd-aggregate';
import { TRANSACTION_MANAGER } from '../decorators/transaction.decorator';
import { getTxId } from '../helpers/trace-id';

export abstract class DddRepository<T extends DddAggregate> {
  constructor(@InjectDataSource() private readonly datasource: DataSource) {}

  protected abstract entityClass: ObjectType<T>;

  get entityManager(): EntityManager {
    return Reflect.getMetadata(TRANSACTION_MANAGER, Reflect) || this.datasource.manager;
  }

  async save(entities: T[]) {
    entities.forEach((entity) => entity.setTxId(getTxId()));
    await this.entityManager.save(entities);
  }
}
