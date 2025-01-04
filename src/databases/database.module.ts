import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeOrmModuleOptions } from './mysql/mysql.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions)],
  exports: [TypeOrmModule],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly datasource: DataSource) {}

  onModuleInit() {
    if (this.datasource.isInitialized) {
      console.log('Mysql connected.');
    } else {
      throw new Error('Check mysql setting.');
    }
  }
}
