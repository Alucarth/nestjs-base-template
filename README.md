<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## NestJs Base Template

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Module Structure Proyect

```bash
  /src
  │── /modules
  │   ├── /auth       → Módulo de autenticación (JWT, Passport, OAuth, etc.)
  │   │   ├── auth.controller.ts
  │   │   ├── auth.module.ts
  │   │   ├── auth.service.ts
  │   │   ├── jwt.strategy.ts
  │   │   ├── local.strategy.ts
  │   ├── /users      → Módulo de usuarios (CRUD, perfiles, roles)
  │   │   ├── users.controller.ts
  │   │   ├── users.module.ts
  │   │   ├── users.service.ts
  │   │   ├── users.entity.ts
  │   ├── /products   → Módulo de productos (si aplica)
  │   │   ├── products.controller.ts
  │   │   ├── products.module.ts
  │   │   ├── products.service.ts
  │   │   ├── products.entity.ts
  │── /common         → Código compartido entre módulos
  │   ├── /decorators
  │   ├── /filters
  │   ├── /interceptors
  │   ├── /guards
  │   ├── /middlewares
  │── /config         → Configuración del proyecto
  │   ├── config.module.ts
  │   ├── config.service.ts
  │   ├── constants.ts
  │── /database       → Conexión a la base de datos y repositorios
  │   ├── database.module.ts
  │   ├── database.service.ts
  │── /core           → Lógica central del negocio (si aplica)
  │── main.ts         → Punto de entrada de la aplicación
  │── app.module.ts   → Módulo raíz
  │── .env            → Variables de entorno
  │── tsconfig.json   → Configuración de TypeScript
  │── package.json    → Dependencias del proyecto
```


## Stay in touch

- Author - [Leandro David Torrez Salinas](https://github.com/Alucarth)


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
