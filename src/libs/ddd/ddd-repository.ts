import { EntityManager, ObjectType } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { DddAggregate } from './ddd-aggregate';
import { DddContext } from './ddd-context';

export abstract class DddRepository<T extends DddAggregate> {
  protected abstract entityClass: ObjectType<T>;

  constructor(
    private readonly context: DddContext,
    @InjectEntityManager() protected readonly entityManager: EntityManager
  ) {}

  async save(entities: T[]) {
    entities.forEach((entity) => entity.setTxId(this.context.txId));
    await this.entityManager.save(entities);
  }
}
