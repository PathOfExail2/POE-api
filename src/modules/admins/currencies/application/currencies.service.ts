import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { AdminsCurrenciesRepository } from '../infrastructure/currencies.repository';

@Injectable()
export class AdminsCurrenciesService extends DddService {
  constructor(private readonly adminsCurrenciesRepository: AdminsCurrenciesRepository) {
    super();
  }

  /**
   * description Currency 생성 서비스
   */
  async create() {}
}
