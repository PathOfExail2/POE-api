import { Injectable } from '@nestjs/common';
import { User } from '../domain/users.entity';
import { DddRepository } from '../../../libs/ddd/ddd-repository';

@Injectable()
export class UsersRepository extends DddRepository<User> {
  entityClass = User;

  async find() {
    return this.entityManager.find(this.entityClass, {});
  }
}
