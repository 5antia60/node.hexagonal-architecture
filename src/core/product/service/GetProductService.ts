import UseCaseGateway from '@/core/shared/gateway/UseCasesGateway';
import ProductInterface from '../model/ProductInterface';
import UserInterface from '@/core/user/model/UserInterface';

export type GetProductPayload = {
  productId: string;
  user: UserInterface;
};

export interface GetProductProxy extends ProductInterface {
  checkedBy: string;
};

export default class GetProductService implements UseCaseGateway<GetProductPayload, GetProductProxy> {
  
  async execute(payload: GetProductPayload): Promise<GetProductProxy> {
    return {
      id: payload.productId,
      name: 'Product 1',
      price: 22.17,
      checkedBy: payload.user.email,
    }
  }

}