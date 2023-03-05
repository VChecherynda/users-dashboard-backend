import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'name',
    });
  }

  async validate(name: string, password: string): Promise<any> {
    console.log('Here I go');
    const user = await this.authService.validateUser(name, password);
    console.log('Got user', user);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}