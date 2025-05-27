import UiUtilsService from '@/core/shared/service/UiUtilsService';
import FindUserService from '@/core/user/service/FindUserService';
import UserRepository from '../../adapters/db/mongo/UserRepository';
import TerminalUtilService from '../../ui/utils/TerminalUtilService';

const terminalUtilService = new TerminalUtilService()
const uiUtils = new UiUtilsService(terminalUtilService);

export default async function FindUser(): Promise<void> {
  uiUtils.title('Encontrar Usuário');

  const email = await uiUtils.requiredField('E-mail do usuário: ');

  const repository = new UserRepository();
  // const repository = new UserInMemoryRepository();
  
  const findUserService = new FindUserService(repository);

  try {
    const user = await findUserService.execute(email);
    uiUtils.success('Usuário encontrado!\n\n' + user);
  } catch (e: any) {
    uiUtils.error(e.message || String(e));
  } finally {
    await uiUtils.waitEnter();
  }
}
