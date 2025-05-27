import CarGateway from './gateway/CarGateway';

export default function race(car: CarGateway, logger: (str: string) => void = console.log): void {
  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();
    logger('\nVelocidade: ' + car.currentSpeed);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.brake();
    logger('\nVelocidade: ' + car.currentSpeed);
  });
}
