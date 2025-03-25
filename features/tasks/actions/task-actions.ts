"use server";

// next imports
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// prisma imports
import { Prisma } from "@prisma/client";
import { prisma } from "@/prisma/db";

// kinde imports
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// idea: Zod implementation instead of FormData
export async function createTask(formData: FormData) {
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // get user
  const user = await getUser();

  try {
    await prisma.task.create({
      data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        userId: user.id,
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
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // authorization check
  const user = await getUser();
  const task = await prisma.task.findUnique({
    where: { id },
  });
  if (task?.userId !== user.id) {
    throw new Error("You're not authorized to edit this task.");
  }

  if (!task) {
    throw new Error("Task with specified ID does not exist.");
  }

  await prisma.task.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
    },
  });
}

// ID is cuid. That's why it's a string.
export async function deleteTask(id: string) {
  // authentication check
  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // authorization check
  const user = await getUser();
  const task = await prisma.task.findUnique({
    where: { id },
  });
  if (task?.userId !== user.id) {
    throw new Error("You're not authorized to edit this task.");
  }

  if (!task) {
    throw new Error("Task with specified ID does not exist.");
  }

  try {
    await prisma.task.delete({ where: { id } });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}
