/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  full_name: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
