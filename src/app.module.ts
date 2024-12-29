import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PingModule } from './modules/ping/ping.module';
import { uuidMiddleware, requestLoggerMiddleware } from '@middlewares';
import { DatabaseModule } from './databases/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, PingModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(uuidMiddleware, requestLoggerMiddleware).forRoutes('*');
  }
}
