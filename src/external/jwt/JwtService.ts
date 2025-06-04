import jwt from 'jsonwebtoken';

export default class JwtService {

  constructor(
    private secret: string,
  ) {}

  public generate(data: string|object): string {
    return jwt.sign(data, this.secret, {
      expiresIn: '1d',
    });
  }
}