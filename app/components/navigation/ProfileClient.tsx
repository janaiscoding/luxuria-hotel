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
            {user.image ? (
              <Image
                src={user.image}
                alt={`${user.name} profile picture`}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
                {user.name}
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-xl">Welcome, {user.name}</h2>
            <div className="flex ">
              <a
                href="/dashboard"
                className="border border-solid h-9 py-1 px-3 bg-orange-800 text-slate-50 hover:bg-orange-900 shadow-sm rounded-md"
              >
                See your bookings
              </a>
              <button
                className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  );
}
