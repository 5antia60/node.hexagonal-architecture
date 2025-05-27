import CryptoGateway from '@/core/user/gateway/CryptoGateway';

export default class SpaceCryptoPasswordService implements CryptoGateway {

  encrypt(value: string): string {
    return value.split('').join(' ');
  }

}
