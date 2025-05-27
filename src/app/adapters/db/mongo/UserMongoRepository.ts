import { Collection } from 'mongodb';
import { getDb } from '../db';
import { collections } from '../routes';
import User from '@/core/user/model/user';
import UserRepository from '@/core/user/service/UserRepository';

export default class UserMongoRepository implements UserRepository {
  private collection: Collection<User>;

  constructor() {
    const db = getDb();
    this.collection = db.collection(collections.users);
  }

  async insert(user: User): Promise<void> {
    await this.collection.insertOne(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.collection.findOne({ email });

    if (!user)
      return null;

    return user;
  }
}