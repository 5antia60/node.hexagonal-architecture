import TerminalUtil from '@/app/utils/terminalUtil';
import fundamentalsMenu from './fundamentalsMenu';
import userMenu from './userMenu';

export default async function MainMenu(): Promise<void> {
  TerminalUtil.title('Menu Principal');

  const [index] = await TerminalUtil.menu([
    '1. Fundamentos',
    '2. Usuário',
    'Sair',
  ]);

  switch (index) {
    case 0:
      await fundamentalsMenu();
      break;

    case 1:
      await userMenu();
      break;

    default:
      process.exit(0);
  }

  MainMenu();
}