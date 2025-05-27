import UiUtilsService from '@/core/shared/service/UiUtilsService';
import TerminalUtilService from '@/app/ui/utils/TerminalUtilService';
import fundamentalsMenu from './fundamentalsMenu';
import userMenu from './userMenu';

const uiUtils = new UiUtilsService(new TerminalUtilService());

export default async function MainMenu(): Promise<void> {
  uiUtils.title('Menu Principal');

  const [index] = await uiUtils.menu(['1. Fundamentos', '2. Usuário', 'Sair']);

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
