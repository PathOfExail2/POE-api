import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';

@Entity()
export class Currency extends DddAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageId: string;

  private constructor() {
    super();
  }

  static of() {
    return new Currency();
  }
}
