import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { AdminsCurrenciesIdRepository } from '../infrastructure/id.repository';

@Injectable()
export class AdminsCurrenciesIdService extends DddService {
  constructor(private adminsCurrenciesIdRepository: AdminsCurrenciesIdRepository) {
    super();
  }

  /**
   * description 특정 currency 단일 조회
   */
  async retrieve() {}
}
