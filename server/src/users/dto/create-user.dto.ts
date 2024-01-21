export class CreateUserDto {
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  cognito_id: string;
  username: string;
}
