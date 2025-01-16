import { Feed } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsInt, IsUrl, IsDateString } from "class-validator";

export class FeedOut implements Feed {
  @IsInt()
  @ApiProperty({ description: "Unique identifier of the feed" })
  id: number;

  @IsString()
  @ApiProperty({ description: "Title of the feed" })
  title: string;

  @IsString()
  @ApiProperty({ description: "Description of the feed" })
  description: string | null;

  @IsUrl()
  @ApiProperty({ description: "RSS link of the feed" })
  rssLink: string;

  @IsUrl()
  @ApiProperty({ description: "Source link of the feed", nullable: true })
  sourceLink: string | null;

  @IsDateString()
  @ApiProperty({ description: "Creation timestamp of the feed" })
  createdAt: Date;

  @IsDateString()
  @ApiProperty({ description: "Last update timestamp of the feed" })
  updatedAt: Date;
}

export class FeedCreateIn extends PartialType(FeedOut) {
  title?: string;

  description?: string;

  rssLink: string;
}

export class FeedUpdateIn extends PartialType(FeedCreateIn) {
  id: number;
}
