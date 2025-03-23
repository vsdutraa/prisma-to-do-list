// shadcn imports
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// task feature imports
import { createTask } from "@/features/tasks/actions/task-actions";

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="task" className="font">
          Task
        </Label>
        <div className="flex gap-1.5">
          <Input
            id="task"
            name="title"
            className="text-xs"
            placeholder="Name of your task"
          />
          <Button variant="outline" size="icon">
            OK
          </Button>
        </div>
      </div>
    </form>
  );
}
