import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    RouterModule.register([
      {
        path: 'admins',
        children: [
          {
            path: 'users',
            module: UsersModule,
          },
        ],
      },
    ]),
  ],
})
export class AdminsModule {}
