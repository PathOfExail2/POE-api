import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '../../../libs/ddd/ddd-aggregate';

@Entity()
export class User extends DddAggregate<number> {}
