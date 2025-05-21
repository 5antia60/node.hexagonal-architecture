import UseCase from '@/core/shared/UseCases';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';
import CryptoProvider from './CryptoProvider';
import UserInMemoryRepository from './UserInMemoryRepository';
import User from '../model/user';

export default class RegisterUserService implements UseCase<User, void> {

  constructor(
    private cryptoProvider: CryptoProvider,
  ) { }

  async execute(user: User): Promise<void> {
    const repository = new UserInMemoryRepository();

    const cryptoPassword = this.cryptoProvider.encrypt(user.password);
    const existingUser = await repository.findByEmail(user.email);

    if (existingUser)
      throw new Error(Errors.userAlreadyExists);

    const newUser = {
      id: Id.generateHash(),
      name: user.name,
      email: user.email,
      password: cryptoPassword,
    };

    console.log(JSON.stringify(newUser));

    repository.insert(newUser);
  }

}
