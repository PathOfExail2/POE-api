import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminsCurrenciesModule } from './currencies/currencies.module';
import { AdminsRunesModule } from './runes/rune.module';
import { AdminsCurrenciesIdModule } from './currencies/_id/id.module';
import { AdminsUsersModule } from './users/users.module';

@Module({
  imports: [
    AdminsCurrenciesModule,
    AdminsCurrenciesIdModule,
    AdminsRunesModule,
    AdminsUsersModule,
    RouterModule.register([
      {
        path: 'admins',
        children: [
          {
            path: 'currencies',
            module: AdminsCurrenciesModule,
            children: [
              {
                path: ':id',
                module: AdminsCurrenciesIdModule,
              },
            ],
          },
          { path: 'runes', module: AdminsRunesModule },
          { path: 'users', module: AdminsUsersModule },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AdminsModule {}
