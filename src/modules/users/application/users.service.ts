import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infrastructure/repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async list() {
    return this.usersRepository.find();
  }
}
