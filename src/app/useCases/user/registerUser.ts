import UserInterface from '@/core/user/model/UserInterface';
import UiUtilsService from '@/core/shared/service/UiUtilsService';
import RegisterUserService from '@/core/user/service/RegisterUserService';
import TerminalUtilService from '../../ui/utils/TerminalUtilService';
import CryptoPasswordService from '../../adapters/auth/CryptoPasswordService';
import UserRepository from '../../adapters/db/mongo/UserRepository';
// import UserInMemoryRepository from '../adapters/db/UserInMemoryRepository';
// import SpaceCryptoPassword from '../adapters/auth/SpaceCryptoPassword';
// import InvertCryptoPasswordService from '@/app/adapters/auth/InvertCryptoPasswordService';

const uiUtils = new UiUtilsService(new TerminalUtilService());

export default async function RegisterUser(): Promise<void> {
  const { requiredField, title, success, error, waitEnter } = await uiUtils;

  title('Registrar Usuário');

  const name = await requiredField('Nome: ');
  const email = await requiredField('E-mail: ');
  const password = await requiredField('Senha: ');
  const user: UserInterface = { name, email, password };

  const repository = new UserRepository();
  // const repository = new UserInMemoryRepository();
  const cryptoPasswordService = new CryptoPasswordService();
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
