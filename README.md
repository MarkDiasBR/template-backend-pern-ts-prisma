# template-back-end
Backend template using PERN, TypeScript, PrismaORM and Jest

## Description

This repository is a robust back-end template built using TypeScript, Express.js, and Prisma. It provides a solid foundation for creating scalable and maintainable Node.js applications. The template comes preconfigured with essential tools and libraries, including Jest for testing, dotenv for environment variable management, and eslint for code linting.

### Key Features:

- **TypeScript Support:** Write safer and more maintainable code with TypeScript's static typing.
- **Express.js Integration:** Easily create APIs and handle HTTP requests with the powerful Express framework.
- **Prisma for Database Management:** Use Prisma as an ORM to interact with your database, ensuring type safety and productivity.
- **Testing with Jest:** Implement comprehensive tests for your application logic and endpoints using Jest.
- **Environment Variable Management:** Manage environment-specific configurations effortlessly with dotenv.
- **Linting and Formatting:** Keep your codebase clean and consistent using ESLint and Prettier.

This template is designed to streamline the development process, allowing developers to focus on building application logic rather than setting up configurations from scratch.

## Deploy

[https://template-backend-pern-ts-prisma-api.onrender.com/](https://template-backend-pern-ts-prisma-api.onrender.com/)

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/template-back-end.git`
2. Install dependencies: `npm install`
3. Set up your environment variables using `.env` files (create `.env` and `.env.test` files if needed).
4. Initiate Husky: `npm run prepare` and make sure it has permission `chmod +x .husky/pre-commit`

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Build the project and start the server using Prisma migrations and Node.js.
- `npm run build`: Compile TypeScript files into JavaScript using `tsc` and `tsc-alias`.
- `npm run seed`: Seed the database using Prisma.
- `npm run dev`: Run the development server with hot-reloading using Nodemon.
- `npm test`: Run tests using Jest and Prisma migrations for testing environment.
- `npm run test:coverage`: Run tests with coverage report.
- `npm run lint`: Run ESLint for code linting.
- `npm run prepare`: Install Husky hooks.

## Prerequisites

Ensure you have Node.js and npm installed on your machine before proceeding.

## Tech Stack

- [Express.js](https://expressjs.com/) - Web framework
- [Prisma](https://www.prisma.io/) - Database toolkit
- [Jest](https://jestjs.io/) - Testing framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.
