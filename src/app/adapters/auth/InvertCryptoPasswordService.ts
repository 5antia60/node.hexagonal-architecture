import CryptoProvider from '../../../core/user/service/CryptoProvider';

export default class InvertCryptoPasswordService implements CryptoProvider {

  encrypt(password: string): string {
    return password.split('').reverse().join('');
  }

}