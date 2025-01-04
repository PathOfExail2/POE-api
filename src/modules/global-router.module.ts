import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UUidMiddleware } from '../middlewares';

@Module({})
export class GlobalRouterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUidMiddleware).forRoutes('*');
  }
}
