import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { run } from './db';
import UserRepository from './external/db/mongo/UserRepository';
import CryptoPasswordService from './external/auth/CryptoPasswordService';
import RegisterUserService from './core/user/service/RegisterUserService';
import RegisterUserController from './external/api/RegisterUserController';
import AuthUserService from './core/user/service/AuthUserService';
import AuthUserController from './external/api/AuthUserController';
import JwtService from './external/jwt/JwtService';

const app = express();
const port = process.env.PORT ?? 3000;

async function start(): Promise<void> {
  try {
    await run();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const userRepository = new UserRepository();
    const cryptoPasswordService = new CryptoPasswordService();
    const jwtService = new JwtService(process.env.JWT_SECRET||'');
    const registerUser = new RegisterUserService(userRepository, cryptoPasswordService);

    const authUser = new AuthUserService(userRepository, jwtService, cryptoPasswordService);

    new RegisterUserController(app, registerUser);
    new AuthUserController(app, authUser);

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}!`);
    });
  } catch (error) {
    console.error('Erro ao iniciar aplicação:', error);
    process.exit(1);
  }
}

start();
