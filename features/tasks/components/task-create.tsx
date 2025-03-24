// shadcn imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// lucide react icons
import { Plus } from "lucide-react";

// task feature imports
import { createTask } from "@/features/tasks/actions/task-actions";

export default function TaskCreate() {
  return (
    <form action={createTask}>
      <div className="flex gap-2">
        <Input
          id="task"
          name="title"
          className="text-sm"
          placeholder="Name of your task"
        />
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
      </div>
    </form>
  );
}
