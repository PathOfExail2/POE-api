import { InjectDataSource } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

export abstract class DddService {
  @InjectDataSource()
  protected entityManager: EntityManager;
}
