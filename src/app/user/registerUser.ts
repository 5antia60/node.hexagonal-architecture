import User from '@/core/user/model/user';
import RegisterUserService from '@/core/user/service/RegisterUserService';
import TerminalUtil from '../utils/terminalUtil';
import CryptoPassword from '../adapters/auth/CryptoPassword';
import UserMongoRepository from '../adapters/db/mongo/UserMongoRepository';
// import UserInMemoryRepository from '../adapters/db/UserInMemoryRepository';
// import SpaceCryptoPassword from '../adapters/auth/SpaceCryptoPassword';
// import InvertCryptoPasswordService from '@/app/adapters/auth/InvertCryptoPasswordService';

export default async function RegisterUser(): Promise<void> {
  const { requiredFiled, title, success, error, waitEnter } = await TerminalUtil;

  title('Registrar Usuário');

  const name = await requiredFiled('Nome: ');
  const email = await requiredFiled('E-mail: ');
  const password = await requiredFiled('Senha: ');
  const user: User = { name, email, password };

  const repository = new UserMongoRepository();
  // const repository = new UserInMemoryRepository();
  const cryptoPasswordService = new CryptoPassword();
  // const cryptoPasswordService = new SpaceCryptoPassword();
  // const cryptoPasswordService = new InvertCryptoPasswordService();

  const registerUserService = new RegisterUserService(repository, cryptoPasswordService);

  try {
    await registerUserService.execute(user);
    success('Usuário registrado com sucesso!');
  } catch (e: any) {
    error(e.message || String(e));
  } finally {
    await waitEnter();
  }
}
