import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/exception.filter';
import { CustomValidationPipe } from './pipes/validation.pipe';

(async () => {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });

  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const server = await app.listen(3000, () => {
    console.log(`server is running on 3000.😎`);
  });
})();
