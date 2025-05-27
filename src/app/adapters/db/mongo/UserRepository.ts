import UserInterface from '@/core/user/model/UserInterface';
import UserGateway from '@/core/user/gateway/UserGateway';
import { Collection } from 'mongodb';
import { getDb } from '../../../../db';
import { collections } from '../routes';

export default class UserRepository implements UserGateway {
  private collection: Collection<UserInterface>;

  constructor() {
    const db = getDb();
    this.collection = db.collection(collections.users);
  }

  async insert(user: UserInterface): Promise<void> {
    await this.collection.insertOne(user);
  }

  async findByEmail(email: string): Promise<UserInterface | null> {
    const user = await this.collection.findOne({ email });

    if (!user) return null;

    return user;
  }
}
