import UserInterface from '../model/UserInterface';

export default interface UserGateway {
  insert(user: UserInterface): Promise<void>;
  findByEmail(email: string): Promise<UserInterface | null>;
}
