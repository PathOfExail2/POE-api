// transaction.interceptor.ts
import { Injectable, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Reflector } from '@nestjs/core';
import { finalize } from 'rxjs/operators';
import { TRANSACTION_KEY } from '../decorators/transaction';

@Injectable()
export class TransactionInterceptor {
  constructor(
    private readonly reflector: Reflector,
    @InjectEntityManager() private readonly entityManager: EntityManager // EntityManager 주입
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isTransactional = this.reflector.get<boolean>(TRANSACTION_KEY, context.getHandler());
    console.log(context);

    if (!isTransactional) {
      return next.handle();
    }

    const queryRunner = this.entityManager.connection.createQueryRunner();

    return new Observable((observer) => {
      queryRunner
        .startTransaction()
        .then(() => {
          next
            .handle()
            .pipe(
              finalize(async () => {
                try {
                  await queryRunner.commitTransaction();
                  observer.complete(); // 성공적으로 완료
                } catch (err) {
                  await queryRunner.rollbackTransaction();
                  observer.error(err); // 오류가 발생하면 롤백
                } finally {
                  await queryRunner.release();
                }
              })
            )
            .subscribe(observer);
        })
        .catch((err) => {
          observer.error(err); // 트랜잭션 시작 실패 시
        });
    });
  }
}
