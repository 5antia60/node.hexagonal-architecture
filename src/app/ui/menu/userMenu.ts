import TerminalUtilService from '@/app/ui/utils/TerminalUtilService';
import UiUtilsService from '@/core/shared/service/UiUtilsService';
import RegisterUser from '../../useCases/user/registerUser';

const uiUtils = new UiUtilsService(new TerminalUtilService());

export default async function userMenu(): Promise<void> {
  uiUtils.title('Usuário');

  const [index] = await uiUtils.menu([
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
