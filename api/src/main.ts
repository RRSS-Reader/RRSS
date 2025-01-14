import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// Configs

import * as apiConfig from "@shared/configs/api";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("RRSS API Services")
    .setDescription("RRSS Reader API interactive documentation")
    // .setVersion(apiConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
}
bootstrap();
