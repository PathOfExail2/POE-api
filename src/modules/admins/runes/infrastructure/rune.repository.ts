import { Injectable } from '@nestjs/common';
import { DddRepository } from '../../../../libs/ddd';
import { Rune } from '../../../../common/domain/rune/rune.entity';

@Injectable()
export class AdminsRunesRepository extends DddRepository<Rune> {
  entityClass = Rune;

  async find() {
    return this.entityManager.find(this.entityClass);
  }
}
