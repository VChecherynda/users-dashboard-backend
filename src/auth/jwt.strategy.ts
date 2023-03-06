import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwt_secret_key',
    });
  }

  async validate(payload: any) {
    console.log('[payload]', payload);

    // TO-DO figure out payload
    return { userId: payload.sub, username: payload.email };
  }
}