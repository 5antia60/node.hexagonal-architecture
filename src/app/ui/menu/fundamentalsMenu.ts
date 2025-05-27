import UiUtilsService from '@/core/shared/service/UiUtilsService';
import TerminalUtilService from '@/app/ui/utils/TerminalUtilService';
import Polymorphism from '../../fundamentals/polymorphism';
import Dip from '../../fundamentals/dip';

const uiUtils = new UiUtilsService(new TerminalUtilService());

export default async function fundamentalsMenu(): Promise<void> {
  uiUtils.title('Fundamentos');

  const [index] = await uiUtils.menu(['1. Polimorfismo', '2. DIP', 'Voltar']);

  switch (index) {
    case 0:
      await Polymorphism(uiUtils);
      break;

    case 1:
      await Dip(uiUtils);
      break;

    default:
      return;
  }

  await fundamentalsMenu();
}
