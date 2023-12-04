"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { signOut } from "next-auth/react";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
import Image from "next/image";
import { useRef } from "react";
import CloseIcon from "../ui/close-icon";

// The profile will always show as a pop-up element
export default function ProfileClient({ user }: { user: User }) {
  const list = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Rooms", link: "rooms" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact us", link: "contact" },
  ];
  const closeRef = useRef<HTMLButtonElement | null>(null);
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
              <button className="border border-solid h-9 py-1 px-3 bg-orange-800 text-slate-50 hover:bg-orange-900 shadow-sm rounded-full">
                {user.name?.charAt(0)}
              </button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex flex-col items-start gap-2">
            <div className="flex justify-between w-full">
              <h2 className="text-xl">Welcome back, {user.name}</h2>
              <Close ref={closeRef}>
                <CloseIcon />
              </Close>
            </div>
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
            <ul className="flex flex-col gap-2 md:hidden">
              <li>Navigation</li>
              {list.map((el, i) => (
                <li
                  key={i}
                  className={`hover:cursor-pointer hover:text-orange-800`}
                  onClick={() => closeRef.current?.click()}
                >
                  <a href={`/#${el.link}`}>{el.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    )
  );
}
