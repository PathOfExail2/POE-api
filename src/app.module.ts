import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PingModule } from './modules/ping/ping.module';
import { uuidMiddleware } from '@middlewares';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [DatabaseModule, PingModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(uuidMiddleware).forRoutes('*');
  }
}
