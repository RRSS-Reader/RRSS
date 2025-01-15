# About

```json
"scripts": {
  "prisma:migrate": "pnpx prisma migrate dev --name \"init\"",
  "build": "nest build",
  "build:watch": "nest build --watch",
  "serve": "node \"./dist/api/src/main.js\"",
  "serve:watch": "nodemon \"./dist/api/src/main.js\" --watch dist",
  "start": "pnpm run build && pnpm run serve",
  "start:dev": "concurrently \"pnpm run build:watch\" \"pnpm run serve:watch\"",
},
```

Above are several commonly-used commands.

## Prisma

`prisma:migrate` is used to handle Prisma schema update, also in charge of re-generating PrismaClient and update database. Check out [Prisma Docs](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#migrate-the-database) for more info.

`prisma:seed` will trigger seeding script located in:

```
./prisma/seed.ts
```

## Build

`build` / `build:watch` Used to build NestJS project using `tsc` (or `swc` by passing `-b swc`)

## Serve

`serve` / `serve:watch` Used to run the compiled NestJS project using `node` or `nodemon`.

Here we do not use `nest start` since our `./dist` file structure is not identical to standard NestJS starter project. We are importing files outside of `./api` directory using `@shared/*` and `@rrss/*`, causing following file structure:

```
- dist
  - api
    - src
      - main.js
  - shared
```

However in standard NestJS starter project, the file structure is like:

```
- dist
  - src
    - main.js
```

So we need to manually run `main.js` using `node` or `nodemon` _(when we need to watch the file changes in `dist` directory)_

# Dev / Prod

For general propose developing, we only need to run the dev command, which will take cares of build and serve process:

```shell
pnpm run start:dev
```

Similarly, we only need to run the following when we want to start NestJS in prod env:

```shell
pnpm run start
```
