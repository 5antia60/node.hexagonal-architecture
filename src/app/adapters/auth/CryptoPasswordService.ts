import CryptoGateway from '@/core/user/gateway/CryptoGateway';
import bcrypt from 'bcrypt';

export default class CryptoPasswordService implements CryptoGateway {

  encrypt(value: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  }

}
