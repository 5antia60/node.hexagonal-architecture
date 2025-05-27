import race from '@/core/fundamentals/race';
import UiUtilsGateway from '@/core/shared/gateway/UiUtilsGateway';
import CivicService from '@/core/fundamentals/service/CivicService';
import FuscaService from '@/core/fundamentals/service/FuscaService';
import FerrariService from '@/core/fundamentals/service/FerrariService';

export default async function Dip(uiUtils: UiUtilsGateway): Promise<void> {
  uiUtils.title('DIP');

  const [type] = await uiUtils.select('Tipo de carro?', ['Fusca', 'Civic', 'Ferrari']);

  let car;
  if (type === 0)
    car = new FuscaService();
  else if (type === 1)
    car = new CivicService();
  else
    car = new FerrariService();

  race(car, uiUtils.success);
  await uiUtils.waitEnter();
}
