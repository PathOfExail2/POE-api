import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from './entities';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '1234',
  port: 3306,
  database: 'poe',
  synchronize: true,
  entities,
};
