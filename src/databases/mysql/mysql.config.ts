import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from './entities';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'poe',
  port: 3306,
  entities,
  synchronize: true,
};
