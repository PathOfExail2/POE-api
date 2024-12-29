import { Module } from '@nestjs/common';
import { UsersController } from './presentation/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/users.entity';
import { UsersService } from './application/users.service';
import { UsersRepository } from './infrastructure/repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
