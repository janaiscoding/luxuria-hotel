import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { signIn } from "next-auth/react";
import { SetStateAction, SyntheticEvent, useState } from "react";
import SignupForm from "./SignupForm";

const SignupComp = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <PopoverContent className="w-full p-6 flex flex-col items-center gap-2">
      <SignupForm />

      <div> or sign in using </div>
      <div className="flex justify-between w-full">
        <button
          className="basis-full border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
          onClick={() =>
            signIn("github", { callbackUrl: "/", redirect: false })
          }
        >
          GitHub
        </button>

        <button
          onClick={() =>
            signIn("credentials", {
              email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
              password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
              callbackUrl: "/",
              redirect: false,
            })
          }
          className="basis-full border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
          type="submit"
        >
          Demo
        </button>
      </div>

      <div className="text-xs">
        Already have an account?{" "}
        <span onClick={() => setShowLogin(true)} className="text-orange-800 hover:cursor-pointer hover:underline">Sign in </span>
      </div>
    </PopoverContent>
  );
};

export default SignupComp;
