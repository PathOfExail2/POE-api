import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '../../../libs/ddd';

type Creator = {
  name: string;
  description: string;
  weaponEffect: string;
  armourEffect: string;
};

@Entity()
export class Rune extends DddAggregate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  weaponEffect: string;

  @Column()
  armourEffect: string;

  private constructor(args: Creator) {
    super();
    if (args) {
      this.name = args.name;
      this.description = args.description;
      this.weaponEffect = args.weaponEffect;
      this.armourEffect = args.armourEffect;
    }
  }

  static of(args: Creator) {
    return new Rune(args);
  }
}
