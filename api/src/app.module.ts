import { Module } from "@nestjs/common";
import { AppService } from "./app.service.js";
import { FeedModule } from "./feed/feed.module.js";
import { PrismaModule } from "nestjs-prisma";

// Controllers
import { AppController } from "./app.controller.js";

@Module({
  imports: [FeedModule, PrismaModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
