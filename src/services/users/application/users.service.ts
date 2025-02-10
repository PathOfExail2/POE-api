import { BadRequestException, Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { UsersRepository } from '../infrastructure/users.repository';
import { getTxId } from '../../../libs/helpers/trace-id';
import { Transactional } from '../../../libs/decorators/transaction.decorator';
import { User } from '../domain/users.entity';

@Injectable()
export class UsersService extends DddService {
  constructor(private readonly usersRepository: UsersRepository) {
    super();
  }

  async list() {
    return this.usersRepository.find({});
  }

  @Transactional()
  async create({
    email,
    password,
    confirmPassword,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    const [user] = await this.usersRepository.find({ email });

    if (user) {
      throw new BadRequestException(`${email} is already existed.`, {
        description: `${email} is already existed.`,
      });
    }

    const newUser = User.of({ email, password, confirmPassword });
    await this.usersRepository.save([newUser]);
  }
}
