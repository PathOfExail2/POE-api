import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, ObjectType } from 'typeorm';

export abstract class DddRepository<T> {
  protected abstract entityClass: ObjectType<T>;

  constructor(@InjectEntityManager() private _entityManager: EntityManager) {}

  protected get entityManager() {
    return this._entityManager;
  }
}
