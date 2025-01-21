import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';
import { createHash } from 'crypto';
import { UnauthorizedException } from '@nestjs/common';

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
      this.password = this.hashPassword(args.password);
    }
  }

  static of(args: Creator) {
    return new User(args);
  }

  private hashPassword(password: string) {
    return createHash('SHA-256').update(password).digest('hex');
  }

  validPassword(plainPassword: string) {
    const hashedPassword = this.hashPassword(plainPassword);

    if (this.password !== hashedPassword) {
      throw new UnauthorizedException('wrong password.');
    }
  }
}
