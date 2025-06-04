export default interface JwtGateway {
  generate(data: string|object): string;
}
