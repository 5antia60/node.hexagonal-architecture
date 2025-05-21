import bcrypt from 'bcrypt';
import CryptoProvider from '@/core/user/service/CryptoProvider';

export default class CryptoPassword implements CryptoProvider {

  encrypt(value: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  }

}