import { PrismaClient } from '@prisma/client';

const fakeFeedsDataList = [
  {
    title: ' ',
  },
];

const prisma = new PrismaClient();

for (let i = 1; i <= 10; i++) {
  prisma.feed.upsert({
    where: {
      title: `Test Feed ${i}`,
    },
    update: {},
    create: {
      title: `Test Feed ${i}`,
      description: `Description for test feed ${i}`,
    },
  });
}
