import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, ObjectType } from 'typeorm';
import { DddContext } from './ddd-context';
import { DddAggregate } from './ddd-aggregate';

export abstract class DddRepository<T extends DddAggregate<T>> {
  protected abstract entityClass: ObjectType<T>;

  constructor(
    private context: DddContext,
    @InjectEntityManager() private _entityManager: EntityManager,
  ) {}

  protected get entityManager() {
    return this._entityManager;
  }

  async save(entities: T[]) {
    entities.forEach((entity) => entity.setTxId(this.context.txId));
    await this.entityManager.save(entities);
  }
}
