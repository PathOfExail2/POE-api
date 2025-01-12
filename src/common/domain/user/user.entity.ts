import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';

type Creator = {
  email: string;
  password: string;
};

@Entity()
export class User extends DddAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  private constructor(args: Creator) {
    super();
    if (args) {
      this.email = args.email;
      this.password = args.password;
    }
  }

  static of(args: Creator) {
    return new User(args);
  }
}
