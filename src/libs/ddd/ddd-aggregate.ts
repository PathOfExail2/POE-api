import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class DddAggregate<T> {
  @PrimaryGeneratedColumn()
  id!: T;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @Column()
  private createdBy!: string;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @Column()
  private updatedBy!: string;
}
