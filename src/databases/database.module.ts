import { Module, NestModule, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import entities from './mysql/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'poe',
      synchronize: true,
      entities,
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly datasource: DataSource) {}

  onModuleInit() {
    if (this.datasource.isInitialized) {
      console.log(`Mysql connected.`);
    } else {
      throw new Error('Check Mysql setting.');
    }
  }
}
