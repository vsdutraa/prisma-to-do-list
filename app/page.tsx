// prisma import
import { prisma } from "@/lib/db";

// task feature imports
import TaskForm from "@/features/tasks/components/task-form";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <>
      <ul className="flex flex-col border-t border-b">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <TaskForm />
    </>
  );
}
