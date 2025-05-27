import UseCase from '@/core/shared/UseCases';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';
import User from '../model/user';
import CryptoProvider from './CryptoProvider';
import UserRepository from './UserRepository';

export default class RegisterUserService implements UseCase<User, void> {

  constructor(
    private repository: UserRepository,
    private cryptoProvider: CryptoProvider,
  ) { }

  async execute(user: User): Promise<void> {
    const cryptoPassword = this.cryptoProvider.encrypt(user.password);
    const existingUser = await this.repository.findByEmail(user.email);

    if (existingUser)
      throw new Error(Errors.userAlreadyExists);

    const newUser = {
      id: Id.generateHash(),
      name: user.name,
      email: user.email,
      password: cryptoPassword,
    };

    this.repository.insert(newUser);
  }

}
