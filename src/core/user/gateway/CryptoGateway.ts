export default interface CryptoGateway {
  encrypt(value: string): string;
  compare(password: string, cryptoPassword: string): boolean;
}
