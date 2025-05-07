import TerminalUtil from '@/app/utils/terminalUtil';
import Polymorphism from '../fundamentals/polymorphism';
import Dip from '../fundamentals/dip';

export default async function fundamentalsMenu(): Promise<void> {
  TerminalUtil.title('Fundamentos');

  const [index] = await TerminalUtil.menu([
    '1. Polimorfismo',
    '2. DIP',
    'Voltar',
  ]);

  switch (index) {
    case 0:
      await Polymorphism();
      break;

    case 1:
      await Dip();
      break;

    default: return;
  }

  await fundamentalsMenu();
}