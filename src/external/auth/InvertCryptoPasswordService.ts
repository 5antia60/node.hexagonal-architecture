import CryptoGateway from '../../core/user/gateway/CryptoGateway';

export default class InvertCryptoPasswordService implements CryptoGateway {
  public encrypt(password: string): string {
    return password.split('').reverse().join('');
  }

  public compare(password: string, cryptoPassword: string): boolean {
    return this.encrypt(password) === cryptoPassword;
  }
}
