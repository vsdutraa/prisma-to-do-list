"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Maybe Zod implementation instead of FormData
export async function createTask(formData: FormData) {
  await prisma.task.create({
    data: {
      title: formData.get("title") as string,
    },
  });

  revalidatePath("/");
}

// ID is cuid. That's why it's a string.
export async function editTask(formData: FormData, id: string) {
  await prisma.task.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
    },
  });
}

export async function deleteTask(id: string) {
  await prisma.task.delete({ where: { id } });
}
