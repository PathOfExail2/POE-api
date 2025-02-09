import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { UsersRepository } from '../infrastructure/users.repository';
import { getTxId } from '../../../libs/helpers/trace-id';

@Injectable()
export class UsersService extends DddService {
  constructor(private readonly usersRepository: UsersRepository) {
    super();
  }

  async list() {
    return this.usersRepository.find();
  }
}
