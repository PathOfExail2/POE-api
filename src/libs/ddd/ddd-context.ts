import { Injectable } from '@nestjs/common';

@Injectable()
export class DddContext {
  txId: string;

  of(txId: string) {
    this.txId = txId;
  }
}
