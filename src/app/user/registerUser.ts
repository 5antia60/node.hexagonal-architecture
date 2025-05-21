import User from '@/core/user/model/user';
import TerminalUtil from '../utils/terminalUtil';
import RegisterUserService from '@/core/user/service/RegisterUserService';
import InvertCryptoPasswordService from '@/app/adapters/auth/InvertCryptoPasswordService';
import SpaceCryptoPassword from '../adapters/auth/SpaceCryptoPassword';

export default async function RegisterUser(): Promise<void> {
  TerminalUtil.title('Registrar Usuário');

  const id = await TerminalUtil.requiredFiled('Id: ');
  const name = await TerminalUtil.requiredFiled('Nome: ');
  const email = await TerminalUtil.requiredFiled('E-mail: ');
  const password = await TerminalUtil.requiredFiled('Senha: ');
  const user: User = { id, name, email, password };

  const cryptoPasswordService = new SpaceCryptoPassword();
  // const cryptoPasswordService = new InvertCryptoPasswordService();
  
  const registerUserService = new RegisterUserService(cryptoPasswordService);

  try {
    await registerUserService.execute(user);
    TerminalUtil.success('Usuário registrado com sucesso!');
  } catch (error: any) {
    TerminalUtil.error(error.message || String(error));
  } finally {
    await TerminalUtil.waitEnter();
  }
}
