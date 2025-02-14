import { Test, TestingModule } from "@nestjs/testing";
import { FeedController } from "./feed.controller";
import { FeedService } from "./feed.service";

describe("FeedController", () => {
  let controller: FeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [FeedService],
    }).compile();

    controller = module.get<FeedController>(FeedController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
