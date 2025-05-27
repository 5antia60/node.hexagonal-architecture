import CarGateway from '../gateway/CarGateway';

export default class FerrariService implements CarGateway {
  constructor(
    readonly maxSpeed: number = 324,
    private _currentSpeed: number = 0
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 20, this.maxSpeed);
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 20, 0);
  }

  get currentSpeed() {
    return this._currentSpeed;
  }
}
