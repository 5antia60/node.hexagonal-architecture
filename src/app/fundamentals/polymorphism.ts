import CarGateway from '@/core/fundamentals/gateway/CarGateway';
import UiUtilsGateway from '@/core/shared/gateway/UiUtilsGateway';
import FuscaService from '@/core/fundamentals/service/FuscaService';
import FerrariService from '@/core/fundamentals/service/FerrariService';

export default async function Polymorphism(uiUtils: UiUtilsGateway): Promise<void> {
  uiUtils.title('Polimorfismo');

  const [carType] = await uiUtils.select('Tipo de carro?', ['Ferrari', 'Fusca']);
  const car: CarGateway = carType === 0 ? new FerrariService() : new FuscaService();

  while (true) {
    uiUtils.clear();
    uiUtils.showValueKey('Velocidade Máxima: ', `${car.maxSpeed} km/h`);
    uiUtils.showValueKey('Velocidade Atual: ', `${car.currentSpeed} km/h`);

    const [option] = await uiUtils.select('Qual opção?', ['Acelerar', 'Frear']);

    option === 0 ? car.accelerate() : car.brake();

    const stay = await uiUtils.confirm('Deseja continuar?');

    if (!stay) return;
  }
}
