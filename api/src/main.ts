import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication, ValidationPipe } from "@nestjs/common";

// Filters
import { RRSSAPIExceptionFilter } from "./exceptions/http-error.filter";

// Configs
import * as apiConfig from "@shared/configs/api";

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

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new RRSSAPIExceptionFilter());

  setupSwagger(app);

  await app.listen(apiConfig.port);
}

bootstrap();
