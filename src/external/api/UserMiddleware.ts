import { NextFunction, Request, Response } from 'express';
import JwtService from '../jwt/JwtService';
import UserInterface from '@/core/user/model/UserInterface';
import UserRepository from '../db/mongo/UserRepository';

export default function UserMiddleware(repository: UserRepository) {
  return async (req: Request, resp: Response, next: NextFunction) => {
    const accessDenied = () => resp.status(403).send('Invalid Token!');

    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token)
      return accessDenied();

    const jwtService = new JwtService(process.env.JWT_SECRET!);
    const userToken = jwtService.get(token) as UserInterface;
    const user = await repository.findByEmail(userToken.email);

    if (!user)
      return accessDenied();

    (req as any).user = user;

    next();
  }
}
