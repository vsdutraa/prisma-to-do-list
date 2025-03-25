// next imports
import Link from "next/link";

// prisma imports
import { Task } from "@prisma/client";

// task feature imports
import TaskDelete from "@/features/tasks/components/task-delete";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border-b py-2"
          >
            <Link href={`/tasks/${task.slug}`}>
              <p className="text-sm leading-none">{task.title}</p>
            </Link>

            <TaskDelete id={task.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
