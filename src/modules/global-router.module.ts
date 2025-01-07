import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestLoggerMiddleware, UUidMiddleware } from '@middlewares';
import { GeneralsModule } from './generals/generals.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [AdminsModule, GeneralsModule],
})
export class GlobalRouterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUidMiddleware, RequestLoggerMiddleware).forRoutes('*');
  }
}
