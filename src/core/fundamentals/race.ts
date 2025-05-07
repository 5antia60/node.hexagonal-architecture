import { terminal } from 'terminal-kit';
import Car from './car';

export default function race(car: Car): void {
  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();
    terminal.red('\nVelocidade: ' + car.currentSpeed);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.brake();
    terminal.red('\nVelocidade: ' + car.currentSpeed);
  });
}
