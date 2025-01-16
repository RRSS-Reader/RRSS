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
import { FeedService } from "./feed.service.js";
import { FeedOut, FeedCreateIn, FeedUpdateIn } from "./feed.dto.js";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@Controller("feed")
@ApiTags("Feeds")
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  @ApiOkResponse({ type: FeedOut })
  create(@Body() createFeedDto: FeedCreateIn) {
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
    @Body() updateFeedDto: FeedUpdateIn,
  ) {
    return this.feedService.update(+id, updateFeedDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.feedService.remove(id);
  }
}
