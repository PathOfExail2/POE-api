import { Inject } from '@nestjs/common';
import { DddContext } from './ddd-context';

export class DddService {
  @Inject()
  private context: DddContext;
}
