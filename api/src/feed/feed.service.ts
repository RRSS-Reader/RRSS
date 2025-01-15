import { Injectable } from "@nestjs/common";
import { CreateFeedDto } from "./dto/create-feed.dto";
import { UpdateFeedDto } from "./dto/update-feed.dto";
import { PrismaService } from "nestjs-prisma";

// Exceptions
import { RRSSAPIException } from "@/exceptions/classes";
import {
  isPrismaNotExistsError,
  isPrismaUniqueFailedError,
} from "@/exceptions/utils";
import { title } from "process";

@Injectable()
export class FeedService {
  constructor(private prisma: PrismaService) {}

  async create(createFeedDto: CreateFeedDto) {
    try {
      return await this.prisma.feed.create({
        data: {
          title: createFeedDto.title ?? "Untitled Feed",
          description: "Default description",
          sourceLink: "Default source link",
          rssLink: createFeedDto.rssLink,
        },
      });
    } catch (e) {
      if (isPrismaUniqueFailedError(e)) {
        console.log(e);
        throw new RRSSAPIException("feed_duplicated", {
          dupKey: "title",
          dupValue: title,
        });
      }
      throw e;
    }
  }

  findAll() {
    return this.prisma.feed.findMany();
  }

  findOne(id: number) {
    try {
      return this.prisma.feed.findUniqueOrThrow({ where: { id } });
    } catch (e) {
      console.log("Into feed fine one");
      console.log(e);
      if (isPrismaNotExistsError(e)) {
        throw new RRSSAPIException("feed_not_found", { id });
      }
      throw e;
    }
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.prisma.feed.update({ where: { id }, data: updateFeedDto });
  }

  remove(id: number) {
    return this.prisma.feed.delete({ where: { id } });
  }
}
