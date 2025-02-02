import { BadRequestException, Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { Transaction } from '@libs/decorators/transaction';
import { AdminsCurrenciesRepository } from '../infrastructure/currencies.repository';
import { Currency } from '../../../../common/domain/currency/currency.entity';

@Injectable()
export class AdminsCurrenciesService extends DddService {
  constructor(private readonly adminsCurrenciesRepository: AdminsCurrenciesRepository) {
    super();
  }

  /**
   * description Currency 전체 리스트 조회
   */
  async list({
    id,
    name,
    description,
    imageId,
  }: {
    id?: number;
    name?: string;
    description?: string;
    imageId?: string;
  }) {
    return this.adminsCurrenciesRepository.find({ id, name, description, imageId });
  }

  /**
   * description Currency 생성 서비스
   */
  @Transaction()
  async create({
    name,
    description,
    imageId,
  }: {
    name: string;
    description: string;
    imageId: string;
  }) {
    const [isExisted] = await this.adminsCurrenciesRepository.find({ name });

    if (isExisted) {
      throw new BadRequestException(`${name} is already existed.`, `${name} is already existed.`);
    }

    const currency = Currency.of({ name, description, imageId });

    await this.adminsCurrenciesRepository.save([currency]);
  }
}
