import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CurrenciesModule } from './currencies/currencies.module';

@Module({
  imports: [
    CurrenciesModule,
    RouterModule.register([
      {
        path: 'generals',
        children: [{ path: 'currencies', module: CurrenciesModule }],
      },
    ]),
  ],
})
export class GeneralsModule {}
