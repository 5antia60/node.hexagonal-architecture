import TerminalUtil from '@/app/utils/terminalUtil';
import fundamentalsMenu from './fundamentalsMenu';

export default async function MainMenu(): Promise<void> {
  TerminalUtil.title('Menu Principal');

  const [index] = await TerminalUtil.menu([
    '1. Fundamentos',
    'Sair',
  ]);

  switch (index) {
    case 0:
      await fundamentalsMenu();
      break;

    case 1:
      process.exit(0);
  }

  MainMenu();
}