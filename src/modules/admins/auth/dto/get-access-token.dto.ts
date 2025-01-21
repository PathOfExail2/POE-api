import { IsString } from 'class-validator';

export class GetAccessTokenDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
