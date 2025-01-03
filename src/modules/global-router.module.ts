import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { UUidMiddleware } from '../middlewares';

@Module({})
export class GlobalRouterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUidMiddleware).forRoutes('*');
  }
}
