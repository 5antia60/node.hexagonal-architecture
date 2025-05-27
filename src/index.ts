import dotenv from 'dotenv';
dotenv.config();

import { run } from './db';
import MainMenu from './app/ui/menu/mainMenu';

run()
  .then(() => MainMenu())
  .catch(error => console.error("Erro ao iniciar aplicação:", error));
