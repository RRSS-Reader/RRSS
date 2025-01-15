import { IsOptional, IsString, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description:
      "The displayed title of this RSS feed, automatically retrived from RSS feed info if not provided",
    required: false,
  })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description:
      "Description of this RSS feed, automatically retrieved from RSS feed info if not provided",
    required: false,
  })
  description?: string;

  @IsString()
  @IsUrl()
  @ApiProperty({ description: "URL of this RSS feed" })
  rssLink: string;
}
