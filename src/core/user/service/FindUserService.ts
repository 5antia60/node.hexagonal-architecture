import UseCaseGateway from '@/core/shared/gateway/UseCasesGateway';
import Errors from '@/core/shared/Errors';
import UserGateway from '../gateway/UserGateway';

export default class FindUserService implements UseCaseGateway<string, string> {

  constructor(
    private repository: UserGateway,
  ) { }

  async execute(email: string): Promise<string> {
    const existingUser = await this.repository.findByEmail(email);

    if (!existingUser)
      throw new Error(Errors.userNotFound);

    return JSON.stringify(existingUser);
  }

}
