import { Injectable } from '@nestjs/common';
import { DddRepository } from '@libs/ddd';
import { User } from '../../../../common/domain/user/user.entity';

@Injectable()
export class AdminsUsersRepository extends DddRepository<User> {
  entityClass = User;
}
