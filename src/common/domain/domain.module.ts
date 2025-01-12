import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './currency/currency.entity';
import { Rune } from './rune/rune.entity';
import { User } from './user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency, Rune, User])],
  exports: [TypeOrmModule],
})
export class DomainModule {}
