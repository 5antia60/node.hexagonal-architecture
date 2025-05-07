import race from '@/core/fundamentals/race';
import TerminalUtil from '../utils/terminalUtil';

export default async function Dip() {
  TerminalUtil.title('DIP');
  race();
  await TerminalUtil.waitEnter();
}