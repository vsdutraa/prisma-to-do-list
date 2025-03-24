// next imports
import Link from "next/link";

// shadcn imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// lucide react imports
import { Pen } from "lucide-react";

export function Navbar() {
  return (
    <header className="flex h-14 items-center border-b">
      <div className="container m-auto flex h-full items-center justify-between border-x px-4">
        {/* left side */}
        <Link href="/" className="flex items-center gap-2">
          <Pen size={20} strokeWidth={3} />
          <h1 className="font-black lowercase">To-Do List</h1>
        </Link>

        {/* right side */}
        <Avatar>
          <AvatarImage src="https://github.com/vsdutraa.png" />
          <AvatarFallback>VD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
