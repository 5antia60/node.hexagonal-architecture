import dotenv from 'dotenv';
dotenv.config();

import { run } from './app/adapters/db/db';
import MainMenu from './app/menu/mainMenu';

run()
  .then(() => MainMenu())
  .catch(error => console.error("Erro ao iniciar aplicação:", error));
