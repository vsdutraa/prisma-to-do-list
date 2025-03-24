"use server";

import { prisma } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Maybe Zod implementation instead of FormData
export async function createTask(formData: FormData) {
  try {
    await prisma.task.create({
      data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        user: {
          connect: {
            email: "vsdutraa@gmail.com",
          },
        },
      },
    });
  } catch (error) {
    // example: https://www.prisma.io/docs/orm/reference/error-reference
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("There is a unique constraint violation.");
      }
    }
  }

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
  try {
    await prisma.task.delete({ where: { id } });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}
