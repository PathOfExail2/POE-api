import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { AdminsUsersRepository } from '../infrastructure/users.repository';
import { User } from '../../../../common/domain/user/user.entity';

@Injectable()
export class AdminsUsersService extends DddService {
  constructor(private readonly adminsUsersRepository: AdminsUsersRepository) {
    super();
  }

  /**
   * description user 생성 서비스
   */
  async create({ email, password }: { email: string; password: string }) {
    const user = User.of({ email, password });
    await this.adminsUsersRepository.save([user]);
  }
}
