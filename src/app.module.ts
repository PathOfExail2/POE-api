import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GlobalRouterModule } from './services/global-router.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [DatabaseModule, GlobalRouterModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
