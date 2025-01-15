import { Module } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { FeedController } from "./feed.controller";
import { PrismaModule } from "nestjs-prisma";

@Module({
  controllers: [FeedController],
  providers: [FeedService],
  imports: [PrismaModule],
})
export class FeedModule {}
