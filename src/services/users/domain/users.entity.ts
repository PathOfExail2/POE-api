import { Column, Entity } from 'typeorm';
import { DddAggregate } from '@libs/ddd';
import { createHash } from 'crypto';
import { BadRequestException } from '@nestjs/common';

type Creator = {
  email: string;
  password: string;
  confirmPassword: string;
};

@Entity()
export class User extends DddAggregate {
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  private constructor(args: Creator) {
    super();

    if (args) {
      if (args.password !== args.confirmPassword) {
        throw new BadRequestException(`password and confirm password are different.`, {
          description: 'password and confirm password are different.',
        });
      }

      this.email = args.email;
      this.password = this.hashPassword(args.password);
    }
  }

  static of(args: Creator) {
    return new User(args);
  }

  private hashPassword(plainPassword: string) {
    return createHash('SHA-256').update(plainPassword).digest('hex');
  }
}
