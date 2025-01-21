import { Module } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import { JwtModule } from '@nestjs/jwt';
import { AdminsAuthController } from './presentation/auth.controller';
import { AdminsAuthService } from './application/auth.service';
import { AdminsAuthRepository } from './infrastructure/auth.repository';

@Module({
  imports: [JwtModule.register({ global: true, secret: '1234' })],
  controllers: [AdminsAuthController],
  providers: [AdminsAuthService, AdminsAuthRepository, DddContext],
})
export class AdminsAuthModule {}
