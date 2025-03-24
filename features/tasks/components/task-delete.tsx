"use client";

// shadcn imports
import { Button } from "@/components/ui/button";

// lucide react icons
import { X } from "lucide-react";

// task feature imports
import { deleteTask } from "@/features/tasks/actions/task-actions";

export default function TaskDelete({ id }: { id: string }) {
  return (
    <form
      action={() => {
        deleteTask(id);
      }}
    >
      <Button
        className="flex size-6 cursor-pointer items-center rounded-sm"
        variant="ghost"
        size="icon"
      >
        <X className="text-red-700" />
      </Button>
    </form>
  );
}
