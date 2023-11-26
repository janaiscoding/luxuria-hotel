import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SyntheticEvent, useState } from "react";

export function PopupForm() {
  const handleSignIn = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
          Sign in
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form
          aria-label="form"
          onSubmit={(e) => handleSignIn(e)}
          className="flex flex-col gap-1 items-center justify-center"
        >
          <legend className="font-montserrat">Welcome back!</legend>
          <label className="w-full">
            Email
            <Input type="email" placeholder="email" />
          </label>

          <label className="w-full">
            Password
            <Input type="password" placeholder="email" />
          </label>

          <div className="flex gap-1">
            <button
              type="submit"
              className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
            >
              Sign in
            </button>
            <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
              Create account
            </button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
