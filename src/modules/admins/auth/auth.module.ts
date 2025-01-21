import { Module } from '@nestjs/common';
import { DddContext } from '@libs/ddd';
import { AdminsAuthController } from './presentation/auth.controller';
import { AdminsAuthService } from './application/auth.service';
import { AdminsAuthRepository } from './infrastructure/auth.repository';

@Module({
  controllers: [AdminsAuthController],
  providers: [AdminsAuthService, AdminsAuthRepository, DddContext],
})
export class AdminsAuthModule {}
