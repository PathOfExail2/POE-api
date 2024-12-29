import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '../../../libs/ddd/ddd-aggregate';

@Entity()
export class User extends DddAggregate<User> {
  @PrimaryGeneratedColumn()
  id: number;

  constructor() {
    super();
  }
}
