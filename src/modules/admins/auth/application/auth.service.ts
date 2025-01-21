import { BadRequestException, Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { JwtService } from '@nestjs/jwt';
import { AdminsAuthRepository } from '../infrastructure/auth.repository';

@Injectable()
export class AdminsAuthService extends DddService {
  constructor(
    private readonly adminsAuthRepository: AdminsAuthRepository,
    private readonly jwtService: JwtService
  ) {
    super();
  }

  async getAccessToken({ email, password }: { email: string; password: string }) {
    const [user] = await this.adminsAuthRepository.find({ email });

    if (!user) {
      throw new BadRequestException(`${email} is not existed`);
    }

    user.validPassword(password);

    const accessToken = await this.jwtService.signAsync({ id: user.id });
    return accessToken;
  }
}
