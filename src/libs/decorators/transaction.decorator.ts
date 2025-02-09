import { DddService } from '../ddd';

export const TRANSACTION_MANAGER = Symbol('TRANSACTION_MANAGER');

export function Transactional() {
  return function (target: DddService, propertyKey: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;

    descriptor.value = async function (this: DddService, ...args: any[]) {
      const { entityManager } = this;

      return entityManager.transaction(async (transactionEntityManager) => {
        try {
          Reflect.defineMetadata(TRANSACTION_MANAGER, transactionEntityManager, Reflect);
          const result = await originMethod.apply(this, args);
          return result;
        } finally {
          Reflect.defineMetadata(TRANSACTION_MANAGER, entityManager, Reflect);
        }
      });
    };

    return descriptor;
  };
}
