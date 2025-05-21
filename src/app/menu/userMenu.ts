import TerminalUtil from '@/app/utils/terminalUtil';
import RegisterUser from '../user/registerUser';

export default async function userMenu(): Promise<void> {
  TerminalUtil.title('Usuário');

  const [index] = await TerminalUtil.menu([
    '1. Registrar Usuário',
    'Voltar',
  ]);

  switch (index) {
    case 0:
      await RegisterUser();
      break;

    default: return;
  }

  await userMenu();
}