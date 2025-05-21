import UseCase from '@/core/shared/UseCases';
import User from '../model/user';
import UserInMemoryRepository from './UserInMemoryRepository';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';

export default class RegisterUserService implements UseCase<User, void> {

  async execute(user: User): Promise<void> {
    const repository = new UserInMemoryRepository();
    const cryptoPassword = user.password.split('').reverse().join('');

    const existingUser = await repository.findByEmail(user.email);

    if (existingUser)
      throw new Error(Errors.userAlreadyExists);

    const newUser = {
      id: Id.generateHash(),
      name: user.name,
      email: user.email,
      password: cryptoPassword,
    };

    repository.insert(newUser);
  }

}
