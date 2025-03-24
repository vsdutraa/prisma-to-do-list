import { Prisma } from "@prisma/client";

// source: https://www.prisma.io/docs/orm/prisma-client/type-safety/operating-against-partial-structures-of-model-types#:~:text=The%20,61%20in%20Prisma%20Client%20queries

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userWithTasks = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: { tasks: true },
});

export type UserWithTasks = Prisma.UserGetPayload<typeof userWithTasks>;
