import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransactionInterceptor } from '@libs/interceptors/transaction.interceptor';
import { GlobalRouterModule } from './modules/global-router.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [DatabaseModule, GlobalRouterModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransactionInterceptor,
    },
  ],
})
export class AppModule {}
