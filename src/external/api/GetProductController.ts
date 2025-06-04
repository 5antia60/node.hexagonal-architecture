import { Express } from 'express';
import GetProductService from '@/core/product/service/GetProductService';

export default class GetProductController {

  constructor(
    private server: Express,
    private useCase: GetProductService,
    private middlewares: any[],
  ) {
    server.get('/api/products/:id', ...middlewares, async (req, res) => {
      try {
        const result = await this.useCase.execute({
          productId: (req.params as any).id,
          user: (req as any).user,
        });
        res.status(200).send(result);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    });
  }

}
