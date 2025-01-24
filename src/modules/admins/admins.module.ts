import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AuthGuard } from '@libs/guards/auth';
import { AdminsCurrenciesModule } from './currencies/currencies.module';
import { AdminsRunesModule } from './runes/rune.module';
import { AdminsCurrenciesIdModule } from './currencies/_id/id.module';
import { AdminsUsersModule } from './users/users.module';
import { AdminsAuthModule } from './auth/auth.module';

@Module({
  imports: [
    AdminsAuthModule,
    AdminsCurrenciesModule,
    AdminsCurrenciesIdModule,
    AdminsRunesModule,
    AdminsUsersModule,
    RouterModule.register([
      {
        path: 'admins',
        children: [
          { path: 'auth', module: AdminsAuthModule },
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
  providers: [
    {
      // NOTE: /admins/* 경로쪽은 모두 인증이 필요하다.
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AdminsModule {}
