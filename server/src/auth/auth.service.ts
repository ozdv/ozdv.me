import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    console.log('USERNAME', username);
    console.log('PASSWORD', pass);

    // get user:
    const user = await this.usersService.findOne(1);
    // const user = {
    //   name: { first_name: 'test_first' },
    // };

    // if unauth:
    if (false) {
      throw new UnauthorizedException();
    }

    // if not found:
    if (!user) {
      // throw 404
    }
    const democognitoid = 69;

    const payload = { sub: democognitoid, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
