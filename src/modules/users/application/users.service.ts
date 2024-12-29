import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infrastructure/repository';
import { DddService } from '../../../libs/ddd/ddd-service';
import { User } from '../domain/users.entity';

@Injectable()
export class UsersService extends DddService {
  constructor(private usersRepository: UsersRepository) {
    super();
  }

  async list() {
    return this.usersRepository.find();
  }

  async create() {
    const user = new User();

    return this.usersRepository.save([user]);
  }
}
