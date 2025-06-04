import UseCaseGateway from '@/core/shared/gateway/UseCasesGateway';
import UserInterface from '../model/UserInterface';
import UserRepository from '@/external/db/mongo/UserRepository';
import Errors from '@/core/shared/Errors';
import CryptoGateway from '../gateway/CryptoGateway';
import JwtGateway from '../gateway/JwtGateway';

export type AuthUserPayload = {
  email: string;
  password: string;
};

export type AuthUserProxy = {
  user: UserInterface;
  token: string;
};

export default class AuthUserService implements UseCaseGateway<AuthUserPayload, AuthUserProxy> {

  constructor(
    private repository: UserRepository,
    private jwtProvider: JwtGateway,
    private cryptoProvider: CryptoGateway,
  ) {}
  
  async execute(data: AuthUserPayload): Promise<AuthUserProxy> {
    const existingUser = await this.repository.findByEmail(data.email);

    if (!existingUser)
      throw new Error(Errors.userNotFound);

    const isPasswordValid = this.cryptoProvider.compare(data.password, existingUser?.password || '');

    if (!isPasswordValid)
      throw new Error(Errors.wrongPassword);

    const user = {
        ...existingUser,
        password: undefined,
      };

    return {
      token: this.jwtProvider.generate(existingUser),
      user,
    };
  }

}