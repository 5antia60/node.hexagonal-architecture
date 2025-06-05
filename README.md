# 🧱 Project with Clean/Hexagonal Architecture

This repository demonstrates, in practice, how to apply the principles of **Clean Architecture** and **Hexagonal Architecture (Ports & Adapters)** in Node.js applications, with two different approaches:

- **Branch `master`**: Terminal (CLI) application with command-line navigation.
- **Branch `backend-express`**: REST API using **Express.js**.

Both versions share the same **business rules core**, structured in a decoupled and testable way, highlighting how the separation between domains, use cases, and infrastructure improves system maintainability and scalability.

---

## 🚀 Features

- User registration
- Authentication (login)
- User search
- Data storage in external **MongoDB**
- Solid structure based on software engineering principles

---

## 🧠 Applied Concepts

- **Domain-Driven Design (DDD)**
- **Layer separation**: `application`, `core`, `interfaces`
- **Dependency inversion**
- **Testability and decoupling**

---

## 🗂 Available Branches

### `master`
CLI project where the user interacts with the application via **terminal**, simulating a real system flow for registration, login, and user lookup. Ideal to demonstrate how business logic is fully isolated from the interface.

### `backend-express`
REST API using **Express.js**, reusing the entire core of the application. This branch is perfect for those who want to see the application running as a traditional backend, with HTTP endpoints and MongoDB integration.

---

## 🔧 How to Run the Project

### Prerequisites

- Node.js >= 18
- MongoDB Atlas (or any external MongoDB)
- Git

### Steps

1. **Clone the repository:**

   ```bash
   $ git clone https://github.com/5antia60/node.hexagonal-architecture.git
   ```

2. **Choose the branch you want to run:**
    
    ```bash
    $ git checkout master
    # or
    $ git checkout backend-express
    ```

3. **Install the dependencies:**

    ```bash
    $ npm install
    ```

4. **Configure the environment variables:**

    Create a `.env` file in the project root following the `.env.example`:

    ```.env
    MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>
    PORT=3000

    JWT_SECRET=<randomSecretKey>
    ```

5. **Run the project:**

    ```.env
   $ npm run dev
    ```

## 🤝 Contribution
This project is for educational purposes only. Suggestions, improvements, or feedback are welcome! Feel free to open an issue or pull request.

## 👨‍💻 Author
Developed by Santiago Delgado 
##### [LinkedIn](https://www.linkedin.com/in/5antiag0)