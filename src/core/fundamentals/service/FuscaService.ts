import CarGateway from '../gateway/CarGateway';

export default class FuscaService implements CarGateway {
  constructor(
    readonly maxSpeed: number = 140,
    private _currentSpeed: number = 0
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 5, this.maxSpeed);
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 5, 0);
  }

  get currentSpeed() {
    return this._currentSpeed;
  }
}
