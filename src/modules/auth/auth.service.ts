import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly saltRounds = 10;

  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.userService.findOne(username);
  //   if (user && user.password === pass) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    console.log('user', user);
    if (user && (await this.comparePasswords(pass, user.password))) {
      const { password, ...result } = user;
      console.log('result', result);
      console.log('password', password);
      return result;
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async login(user: any) {
    console.log('user_loign', user);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const payload = { username: user.username, sub: user.id };
    console.log('payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
