import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class DddAggregate {
  @CreateDateColumn({ select: false })
  private readonly createdAt!: Date;

  @Column({ select: false })
  private createdBy!: string;

  @UpdateDateColumn({ select: false })
  private readonly updatedAt!: Date;

  @Column({ select: false })
  private updatedBy!: string;

  setTxId(txId: string) {
    if (!this.createdBy) {
      this.createdBy = txId;
    }
    this.updatedBy = txId;
  }
}
