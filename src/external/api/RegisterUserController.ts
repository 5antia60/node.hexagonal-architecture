import { Express } from 'express';
import RegisterUserService from '@/core/user/service/RegisterUserService';

export default class RegisterUserController {

  constructor(
    private server: Express,
    private useCase: RegisterUserService,
  ) {
    server.post('/api/user/register', async (req, res) => {
      try {
        await this.useCase.execute({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });

        res.status(201).send();
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    });
  }

}
