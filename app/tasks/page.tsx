// prisma imports
import { prisma } from "@/prisma/db";

// kinde imports
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// task feature imports
import TaskList from "@/features/tasks/components/task-list";
import TaskCreate from "@/features/tasks/components/task-create";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  const tasks = await prisma.task.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <div className="flex h-full flex-col justify-between">
      {user && (
        <>
          <TaskList tasks={tasks} />

          <TaskCreate />
        </>
      )}
    </div>
  );
}
