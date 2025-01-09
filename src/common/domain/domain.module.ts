import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './currency/currency.entity';
import { Rune } from './rune/rune.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency, Rune])],
  exports: [TypeOrmModule],
})
export class DomainModule {}
