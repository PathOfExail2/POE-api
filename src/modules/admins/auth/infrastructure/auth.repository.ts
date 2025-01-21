import { Injectable } from '@nestjs/common';
import { DddRepository } from '@libs/ddd';
import { User } from '../../../../common/domain/user/user.entity';

@Injectable()
export class AdminsAuthRepository extends DddRepository<User> {
  entityClass = User;

  async find({ email }: { email: string }) {
    return this.entityManager.find(this.entityClass, { where: { email } });
  }
}
