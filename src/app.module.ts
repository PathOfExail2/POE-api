import { Module } from '@nestjs/common';
import { GlobalRouterModule } from './modules/global-router.module';

@Module({
  imports: [GlobalRouterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
