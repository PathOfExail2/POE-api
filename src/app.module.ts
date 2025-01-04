import { Module } from '@nestjs/common';
import { GlobalRouterModule } from './modules/global-router.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [DatabaseModule,GlobalRouterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
