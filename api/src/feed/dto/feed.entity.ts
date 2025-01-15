import { Feed } from "@prisma/client";

import { ApiProperty } from "@nestjs/swagger";

export class FeedEntity implements Feed {
  @ApiProperty({ description: "Unique identifier of the feed" })
  id: number;

  @ApiProperty({ description: "Title of the feed" })
  title: string;

  @ApiProperty({ description: "Description of the feed" })
  description: string | null;

  @ApiProperty({ description: "RSS link of the feed" })
  rssLink: string;

  @ApiProperty({ description: "Source link of the feed", nullable: true })
  sourceLink: string | null;

  @ApiProperty({ description: "Creation timestamp of the feed" })
  createdAt: Date;

  @ApiProperty({ description: "Last update timestamp of the feed" })
  updatedAt: Date;
}
