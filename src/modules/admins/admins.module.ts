import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminsCurrenciesModule } from './currencies/currencies.module';
import { AdminsRunesModule } from './runes/rune.module';

@Module({
  imports: [
    AdminsCurrenciesModule,
    AdminsRunesModule,
    RouterModule.register([
      {
        path: 'admins',
        children: [
          {
            path: 'currencies',
            module: AdminsCurrenciesModule,
          },
          { path: 'runes', module: AdminsRunesModule },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AdminsModule {}
