import UserInterface from '@/core/user/model/UserInterface';
import UiUtilsService from '@/core/shared/service/UiUtilsService';
import RegisterUserService from '@/core/user/service/RegisterUserService';
import CryptoPasswordService from '../../adapters/auth/CryptoPasswordService';
import TerminalUtilService from '../../ui/utils/TerminalUtilService';
import UserRepository from '../../adapters/db/mongo/UserRepository';
// import UserInMemoryRepository from '../adapters/db/UserInMemoryRepository';
// import SpaceCryptoPassword from '../adapters/auth/SpaceCryptoPassword';
// import InvertCryptoPasswordService from '@/app/adapters/auth/InvertCryptoPasswordService';

export default async function RegisterUser(): Promise<void> {
  const terminalUtilService = new TerminalUtilService()
  const uiUtils = new UiUtilsService(terminalUtilService);

  uiUtils.title('Registrar Usuário');

  const name = await uiUtils.requiredField('Nome: ');
  const email = await uiUtils.requiredField('E-mail: ');
  const password = await uiUtils.requiredField('Senha: ');
  const user: UserInterface = { name, email, password };

  const repository = new UserRepository();
  // const repository = new UserInMemoryRepository();
  const cryptoPasswordService = new CryptoPasswordService();
  // const cryptoPasswordService = new SpaceCryptoPassword();
  // const cryptoPasswordService = new InvertCryptoPasswordService();

  const registerUserService = new RegisterUserService(repository, cryptoPasswordService);

  try {
    await registerUserService.execute(user);
    uiUtils.success('Usuário registrado com sucesso!');
  } catch (e: any) {
    uiUtils.error(e.message || String(e));
  } finally {
    await uiUtils.waitEnter();
  }
}
