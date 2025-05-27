import TerminalUtilService from '@/app/ui/utils/TerminalUtilService';
import UiUtilsService from '@/core/shared/service/UiUtilsService';
import RegisterUser from '../../useCases/user/registerUser';
import FindUser from '@/app/useCases/user/findUser';

const uiUtils = new UiUtilsService(new TerminalUtilService());

export default async function userMenu(): Promise<void> {
  uiUtils.title('Usuário');

  const [index] = await uiUtils.menu(['1. Registrar Usuário', '2. Encontrar Usuário', 'Voltar']);

  switch (index) {
    case 0:
      await RegisterUser();
      break;

    case 1:
      await FindUser();
      break;

    default:
      return;
  }

  await userMenu();
}
