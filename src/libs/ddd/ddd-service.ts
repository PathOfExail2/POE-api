import { Inject } from '@nestjs/common';
import { DddContext } from './ddd-context';

export abstract class DddService {
  @Inject()
  private context: DddContext;
}
