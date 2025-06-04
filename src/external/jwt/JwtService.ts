import jwt from 'jsonwebtoken';
import JwtGateway from '@/core/user/gateway/JwtGateway';

export default class JwtService implements JwtGateway {

  constructor(
    private secret: string,
  ) {}

  public generate(data: string|object): string {
    return jwt.sign(data, this.secret, {
      expiresIn: '1d',
    });
  }

  public get(token: string): string | object {
    return jwt.verify(token, this.secret);
  }
}
