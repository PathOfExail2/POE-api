import { Injectable } from '@nestjs/common';
import { GeneralsCurrenciesRepository } from '../infrastructure/currencies.repository';

@Injectable()
export class GeneralsCurrenciesService {
  constructor(private readonly generalsCurrenciesRepository: GeneralsCurrenciesRepository) {}
}
