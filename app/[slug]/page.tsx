// next imports
import { redirect } from "next/navigation";

// prisma imports
import { prisma } from "@/prisma/db";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const task = await prisma.task.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!task) {
    redirect("/");
  }

  return (
    <div className="h-full">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}
