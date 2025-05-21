import CryptoProvider from '@/core/user/service/CryptoProvider';

export default class SpaceCryptoPassword implements CryptoProvider {

  encrypt(value: string): string {
    return value.split('').join(' ');
  }

}
