"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { signOut } from "next-auth/react";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
import Image from "next/image";

// The profile will always show as a pop-up element
export default function ProfileClient({ user }: { user: User }) {
  return (
    user && (
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
            {user.image && (
              <Image
                src={user.image}
                alt={`${user.name} profile picture`}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div>
            <h2>Welcome, {user.name}</h2>
            <a href="/dashboard">Dashboard</a>
          </div>
          <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
        </PopoverContent>
      </Popover>
    )
  );
}
