import User from '../model/user';

export default class UserInMemoryRepository {
  private static readonly items: User[] = [];

  async insert(user: User): Promise<void> {
    const items = UserInMemoryRepository.items;
    const existingUser = await this.findByEmail(user.email);

    if (existingUser)
      return;

    items.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const items = UserInMemoryRepository.items;
    return items.find(item => item.email === email) ?? null;
  }
}