import { Module } from "@nestjs/common";
import { FeedService } from "./feed.service.js";
import { FeedController } from "./feed.controller.js";
import { PrismaModule } from "nestjs-prisma";

@Module({
  controllers: [FeedController],
  providers: [FeedService],
  imports: [PrismaModule],
})
export class FeedModule {}
