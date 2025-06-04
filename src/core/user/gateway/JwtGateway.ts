export default interface JwtGateway {
  generate(data: string | object): string;
  get(token: string): string | object;
}
