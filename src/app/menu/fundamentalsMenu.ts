import TerminalUtil from '@/app/utils/terminalUtil';
import Polymorphism from '../fundamentals/polymorphism';

export default async function fundamentalsMenu(): Promise<void> {
  TerminalUtil.title('Fundamentos');

  const [index] = await TerminalUtil.menu([
    '1. Polimorfismo',
    'Voltar',
  ]);

  switch (index) {
    case 0:
      await Polymorphism();
      break;

    case 1: return;
  }

  await fundamentalsMenu();
}