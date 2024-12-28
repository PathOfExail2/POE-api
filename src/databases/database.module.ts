import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './mysql/mysql.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...typeOrmConfig, autoLoadEntities: true }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly datasource: DataSource) {}

  async onModuleInit() {
    if (this.datasource.isInitialized) {
      console.log(`MySQL connected.`);
    } else {
      throw new Error(`Check Database.`);
    }
  }
}
