import { IsString } from 'class-validator';

export class CreatedCurrencyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageId: string;
}
