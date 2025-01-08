import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@libs/filters';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const server = await app.listen(3000, () => {
    console.log('server is running on 3000. 😎');
  });
})();
