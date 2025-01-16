import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication, ValidationPipe } from "@nestjs/common";

// Filters
import { RRSSAPIExceptionFilter } from "./exceptions/http-error.filter.js";

// Configs
import * as apiConfig from "#shared/configs/api.js";

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle("RRSS API Services")
    .setDescription("RRSS Reader API interactive documentation")
    .setVersion(apiConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(apiConfig.swaggerPath, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global ValidationPipe
  // Powered by class-validator, check out:
  // https://docs.nestjs.com/pipes#class-validator
  // for more info.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Global RRSS Exception Handler
  app.useGlobalFilters(new RRSSAPIExceptionFilter());

  // Set up swagger interactive API docs.
  setupSwagger(app);

  await app.listen(apiConfig.port);
}

bootstrap();
