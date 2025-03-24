import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialTasks: Prisma.TaskCreateInput[] = [
  {
    title: "Buy Noodles",
    slug: "buy-noodles",
    user: {
      connectOrCreate: {
        where: {
          email: "vsdutraa@gmail.com",
        },
        create: {
          email: "vsdutraa@gmail.com",
          hashedPassword: "noobnoobnoob",
        },
      },
    },
  },
];

async function main() {
  console.log("Seeding...");

  for (const task of initialTasks) {
    const newTask = await prisma.task.create({ data: task });
    console.log(`Created task with id: ${newTask.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
