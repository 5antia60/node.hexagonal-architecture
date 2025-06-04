import CryptoGateway from '@/core/user/gateway/CryptoGateway';

export default class SpaceCryptoPasswordService implements CryptoGateway {
  public encrypt(value: string): string {
    return value.split('').join(' ');
  }

  public compare(password: string, cryptoPassword: string): boolean {
    return this.encrypt(password) === cryptoPassword;
  }
}
