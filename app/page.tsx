// next imports
// import { redirect } from "next/navigation";
import Link from "next/link";

// kinde imports
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

// prisma imports
// import { prisma } from "@/prisma/db";

// shadcn imports
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="m-auto flex max-w-[600px] flex-col gap-2">
      <div>
        <h1 className="text-2xl font-black">To-do App</h1>
        <p className="text-lg">
          Go to the{" "}
          <Link href="/tasks" className="animate-pulse hover:underline">
            tasks
          </Link>{" "}
          page to start adding your tasks.
        </p>
      </div>

      <div className="flex space-x-1">
        <LoginLink>
          <Button variant="outline" className="cursor-pointer">
            Sign in
          </Button>
        </LoginLink>
        <RegisterLink>
          <Button className="cursor-pointer">Sign up</Button>
        </RegisterLink>
      </div>
    </div>
  );
}
