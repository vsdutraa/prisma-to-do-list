// prisma imports
import { prisma } from "@/prisma/db";

// task feature imports
import TaskList from "@/features/tasks/components/task-list";
import TaskCreate from "@/features/tasks/components/task-create";

export default async function Home() {
  const user = await prisma.user.findUnique({
    where: {
      email: "vsdutraa@gmail.com",
    },
    include: {
      tasks: true,
    },
  });

  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <div className="flex h-full flex-col justify-between">
      {user && (
        <>
          <TaskList tasks={user.tasks} />

          <TaskCreate />
        </>
      )}
    </div>
  );
}
