import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { FeedService } from "./feed.service";
import { CreateFeedDto } from "./dto/create-feed.dto";
import { UpdateFeedDto } from "./dto/update-feed.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("feed")
@ApiTags("Feeds")
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto) {
    return this.feedService.create(createFeedDto);
  }

  @Get()
  findAll() {
    return this.feedService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.feedService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateFeedDto: UpdateFeedDto,
  ) {
    return this.feedService.update(+id, updateFeedDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.feedService.remove(id);
  }
}
