# 🧱 Projeto com Arquitetura Limpa/Hexagonal

Este repositório demonstra, na prática, como aplicar os princípios da **Arquitetura Limpa (Clean Architecture)** e da **Arquitetura Hexagonal (Ports & Adapters)** em aplicações Node.js, com dois enfoques distintos:

- **Branch `master`**: Aplicação de terminal (CLI) com navegação via linha de comando.
- **Branch `backend-express`**: API REST usando o **Express.js**.

Ambas as versões compartilham o mesmo **core de regras de negócio**, estruturado de forma desacoplada e testável, evidenciando como a separação entre domínios, casos de uso e infraestrutura favorece a manutenibilidade e escalabilidade do sistema.

---

## 🚀 Funcionalidades

- Cadastro de usuários
- Autenticação (login)
- Busca de usuários
- Armazenamento de dados em **MongoDB** externo
- Estrutura sólida baseada em princípios de engenharia de software

---

## 🧠 Conceitos Aplicados

- **Domain-Driven Design (DDD)**
- **Separação de camadas**: `application`, `core`, `interfaces`
- **Inversão de dependência**
- **Testabilidade e desacoplamento**

---

## 🗂 Branches Disponíveis

### `master`
Projeto CLI onde o usuário interage com a aplicação via **terminal**, simulando um fluxo de sistema real para registro, login e consulta de usuários. Ideal para demonstrar como a lógica de negócio é totalmente isolada da interface.

### `backend-express`
API REST com **Express.js**, reutilizando todo o core da aplicação. Esta branch é perfeita para quem deseja ver a aplicação rodando como um backend tradicional, com endpoints HTTP e integração com o banco MongoDB.

---

## 🔧 Como rodar o projeto

### Pré-requisitos

- Node.js >= 18
- MongoDB Atlas (ou qualquer MongoDB externo)
- Git

### Passos

1. **Clone o repositório:**

   ```bash
   $ git clone https://github.com/5antia60/node.hexagonal-architecture.git
   ```

2. **Escolha a branch que deseja rodar:**
    
    ```bash
    $ git checkout master
    # ou
    $ git checkout backend-express
    ```

3. **Instale as dependências:**

    ```bash
    $ npm install
    ```

4. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto com o seguindo o `.env.example`:

    ```.env
    MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<database>
    PORT=3000

    JWT_SECRET=<randomSecretKey>
    ```

5. **Execute o projeto:**

    ```.env
   $ npm run dev
    ```

## 🤝 Contribuição
Este projeto é apenas um exemplo didático. Sugestões, melhorias ou críticas são bem-vindas! Fique à vontade para abrir uma issue ou pull request.

## 👨‍💻 Autor
Desenvolvido por Santiago Delgado
[LinkedIn](https://www.linkedin.com/in/5antiag0)