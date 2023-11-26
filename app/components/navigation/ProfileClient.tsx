"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useUser } from "@auth0/nextjs-auth0/client";

import Image from "next/image";

// The profile will always show as a pop-up element
export default function ProfileClient() {
  const { user } = useUser();

  return (
    user && (
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
            <Image
              src={user.picture!}
              alt={`${user.name} profile picture`}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex gap-1 items-center justify-center">
            <h2>Welcome, {user.name}</h2>
          </div>
          <a href="/api/auth/logout">Logout</a>
        </PopoverContent>
      </Popover>
    )
  );
}
