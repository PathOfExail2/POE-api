import { Module } from '@nestjs/common';
import { AdminsModule } from './admins.module';
import { GeneralsModule } from './generals.module';

@Module({
  imports: [AdminsModule, GeneralsModule],
})
export class GlobalRouterModule {}
