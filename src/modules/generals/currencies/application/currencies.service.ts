import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { GeneralsCurrenciesRepository } from '../infrastructure/currencies.repository';

@Injectable()
export class GeneralsCurrenciesService extends DddService {
  constructor(private readonly generalsCurrenciesRepository: GeneralsCurrenciesRepository) {
    super();
  }

  async list() {
    return this.generalsCurrenciesRepository.find({});
  }
}
