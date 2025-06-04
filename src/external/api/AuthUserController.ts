import { Express } from 'express';
import AuthUserService from '@/core/user/service/AuthUserService';

export default class AuthUserController {

  constructor(
    private server: Express,
    private useCase: AuthUserService,
  ) {
    server.post('/api/user/auth', async (req, res) => {
      try {
        const result = await this.useCase.execute({
          email: req.body.email,
          password: req.body.password,
        });

        res.status(200).send(result);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    });
  }

}
