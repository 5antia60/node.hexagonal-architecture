import race from '@/core/fundamentals/race';
import TerminalUtil from '../utils/terminalUtil';
import Fusca from '@/core/fundamentals/fusca';
import Ferrari from '@/core/fundamentals/ferrari';
import Civic from '@/core/fundamentals/civic';
import { terminal } from 'terminal-kit';

export default async function Dip() {
  TerminalUtil.title('DIP');

  const [type] = await TerminalUtil.select('Tipo de carro?', ['Fusca', 'Civic', 'Ferrari']);

  let car;
  if (type === 0)
    car = new Fusca();
  else if (type === 1)
    car = new Civic();
  else
    car = new Ferrari();

  race(car, terminal.green);
  await TerminalUtil.waitEnter();
}