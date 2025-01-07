import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminsCurrenciesModule } from './currencies/currencies.module';

@Module({
  imports: [
    AdminsCurrenciesModule,
    RouterModule.register([
      {
        path: 'admins',
        children: [
          {
            path: 'currencies',
            module: AdminsCurrenciesModule,
          },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AdminsModule {}
