import { BadRequestException, Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { AdminsAuthRepository } from '../infrastructure/auth.repository';

@Injectable()
export class AdminsAuthService extends DddService {
  constructor(private readonly adminsAuthRepository: AdminsAuthRepository) {
    super();
  }

  async getAccessToken({ email, password }: { email: string; password: string }) {
    const [user] = await this.adminsAuthRepository.find({ email });

    if (!user) {
      throw new BadRequestException(`${email} is not existed`);
    }
  }
}
