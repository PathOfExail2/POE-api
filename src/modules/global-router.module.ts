import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UUidMiddleware } from '@middlewares';
import { GeneralsModule } from './generals/generals.module';

@Module({
  imports: [GeneralsModule]
})
export class GlobalRouterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUidMiddleware).forRoutes('*');
  }
}
