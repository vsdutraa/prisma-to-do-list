"use client";

// next imports
import Link from "next/link";
import { usePathname } from "next/navigation";

// kinde imports
import {
  useKindeBrowserClient,
  LogoutLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs";

// shadcn imports
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// lucide react improts
import { LoaderCircle } from "lucide-react";

export default function UserAvatarDropdown() {
  const pathname = usePathname();
  console.log(pathname);

  const { isAuthenticated, getUser, isLoading } = useKindeBrowserClient();
  const user = getUser();

  return (
    <>
      {isLoading ? (
        <Button
          disabled={isLoading}
          className="rounded-full"
          variant="outline"
          size="icon"
        >
          <LoaderCircle className="animate-spin" />
        </Button>
      ) : isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* User avatar */}
            <Avatar>
              <AvatarImage src={user.picture!} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/tasks">My Tasks</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="text-destructive">Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className="cursor-pointer" variant="outline">
          <LoginLink>Sign in</LoginLink>
        </Button>
      )}
    </>
  );
}
