import Car from '@/core/fundamentals/car';
import Fusca from '@/core/fundamentals/fusca';
import TerminalUtil from '../utils/terminalUtil';
import Ferrari from '@/core/fundamentals/ferrari';

export default async function Polymorphism() {
  TerminalUtil.title('Polimorfismo');

  const [carType] = await TerminalUtil.select('Tipo de carro?', ['Ferrari', 'Fusca']);
  const car: Car = carType === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.clear();
    TerminalUtil.showValueKey('Velocidade Máxima: ', `${ car.maxSpeed } km/h`);
    TerminalUtil.showValueKey('Velocidade Atual: ', `${ car.currentSpeed } km/h`);

    const [option] = await TerminalUtil.select('Qual opção?', ['Acelerar', 'Frear']);
    
    option === 0 ? car.accelerate() : car.brake();

    const stay = await TerminalUtil.confirm('Deseja continuar?');

    if (!stay)
      return;
  }
}