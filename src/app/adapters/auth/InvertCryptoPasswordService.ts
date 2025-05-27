import CryptoGateway from '../../../core/user/gateway/CryptoGateway';

export default class InvertCryptoPasswordService implements CryptoGateway {

  encrypt(password: string): string {
    return password.split('').reverse().join('');
  }

}
