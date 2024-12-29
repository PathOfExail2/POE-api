import { BadRequestException, ValidationPipe } from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const message = errors
          .map((error) => Object.values(error.constraints))
          .join('');
        return new BadRequestException({ message });
      },
    });
  }
}
