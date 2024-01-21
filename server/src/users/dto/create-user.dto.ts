import { IsEmail } from 'class-validator';

export class CreateUserDto {
  id: string;
  name: {
    first_name: string;
    last_name: string;
  };
  @IsEmail()
  email: string;
  cognito_id: string;
  username: string;
}
