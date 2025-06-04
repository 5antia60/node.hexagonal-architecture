import UseCaseGateway from '@/core/shared/gateway/UseCasesGateway';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';
import UserInterface from '../model/UserInterface';
import CryptoGateway from '../gateway/CryptoGateway';
import UserGateway from '../gateway/UserGateway';

export default class RegisterUserService implements UseCaseGateway<UserInterface, void> {
  constructor(
    private repository: UserGateway,
    private cryptoProvider: CryptoGateway
  ) {}

  async execute(user: UserInterface): Promise<void> {
    if (!user.password)
      return;

    const cryptoPassword = this.cryptoProvider.encrypt(user.password);
    const existingUser = await this.repository.findByEmail(user.email);

    if (existingUser) throw new Error(Errors.userAlreadyExists);

    const newUser = {
      id: Id.generateHash(),
      name: user.name,
      email: user.email,
      password: cryptoPassword
    };

    this.repository.insert(newUser);
  }
}
