export default interface CarGateway {
  readonly maxSpeed: number;
  currentSpeed: number;
  accelerate(): void;
  brake(): void;
}
