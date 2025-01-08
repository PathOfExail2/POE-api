import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';

type Creator = {
  name: string;
  description: string;
  imageId: string;
};

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

  private constructor(args: Creator) {
    super();
    if (args) {
      this.name = args.name;
      this.description = args.description;
      this.imageId = args.imageId;
    }
  }

  static of(args: Creator) {
    return new Currency(args);
  }
}
