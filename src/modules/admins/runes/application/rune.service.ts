import { Injectable } from '@nestjs/common';
import { DddService } from '../../../../libs/ddd';
import { AdminsRunesRepository } from '../infrastructure/rune.repository';

@Injectable()
export class AdminsRunesService extends DddService {
  constructor(private readonly adminsRunesRepository: AdminsRunesRepository) {
    super();
  }

  async list() {
    return this.adminsRunesRepository.find();
  }
}
