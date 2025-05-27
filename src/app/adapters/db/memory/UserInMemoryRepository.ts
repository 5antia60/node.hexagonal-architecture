import UserInterface from '@/core/user/model/UserInterface';
import UserGateway from '@/core/user/gateway/UserGateway';

export default class UserInMemoryRepository implements UserGateway {
  private static readonly items: UserInterface[] = [];

  async insert(user: UserInterface): Promise<void> {
    const items = UserInMemoryRepository.items;
    const existingUser = await this.findByEmail(user.email);

    if (existingUser)
      return;

    items.push(user);
  }

  async findByEmail(email: string): Promise<UserInterface | null> {
    const items = UserInMemoryRepository.items;
    return items.find(item => item.email === email) ?? null;
  }
}
