import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { GlobalRouterModule } from './services/global-router.module';
import { DatabaseModule } from './databases/database.module';
import { UUIDMiddleware } from './middlewares/uuid.middleware';

@Module({
  imports: [DatabaseModule, GlobalRouterModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUIDMiddleware).forRoutes('*');
  }
}
