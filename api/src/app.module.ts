import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { FeedModule } from "./feed/feed.module";
import { PrismaModule } from "nestjs-prisma";

// Controllers
import { AppController } from "./app.controller";
import { FeedController } from "./feed/feed.controller";

@Module({
  imports: [FeedModule, PrismaModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
