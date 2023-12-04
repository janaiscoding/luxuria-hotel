import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { signIn } from "next-auth/react";
import { SetStateAction, SyntheticEvent, useState } from "react";
import SignupForm from "./SignupForm";
import AuthProvidedMethods from "./AuthProvidedMethods";

const SignupComp = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <PopoverContent className="w-full p-6 flex flex-col items-center gap-2">
      <SignupForm />

      <div> or sign in using </div>
      <AuthProvidedMethods />
      <div className="text-xs flex w-full gap-1">
        <p>Already have an account? </p>
        <a
          tabIndex={1}
          aria-label="Swap to sign in form"
          onClick={() => setShowLogin(true)}
          className="text-orange-800 hover:cursor-pointer hover:underline"
        >
          Sign in{" "}
        </a>
      </div>
    </PopoverContent>
  );
};

export default SignupComp;
