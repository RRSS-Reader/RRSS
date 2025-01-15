import { PartialType } from "@nestjs/mapped-types";
import { IsInt, IsOptional, IsString, IsUrl } from "class-validator";
import { CreateFeedDto } from "./create-feed.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateFeedDto extends PartialType(CreateFeedDto) {
  @IsOptional()
  @IsInt()
  @ApiProperty()
  id: number;

  @IsString()
  @IsUrl()
  @ApiProperty()
  rssLink: string;
}
