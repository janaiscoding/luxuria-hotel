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
    <PopoverContent className="w-full p-6">
      <SignupForm />

      <div>
        <div> or sign in using </div>
        <div className="flex justify-between w-full">
          <button
            className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
            onClick={() =>
              signIn("github", { callbackUrl: "/", redirect: false })
            }
          >
            GitHub
          </button>

          <button
            onClick={() =>
              signIn("credentials", {
                email: "myemail@mail.com",
                password: "mypw",
                callbackUrl: "/",
                redirect: false,
              })
            }
            className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
            type="submit"
          >
            Demo Account
          </button>
        </div>

        <div>
          Already have an account?{" "}
          <span onClick={() => setShowLogin(true)}>Sign in </span>
        </div>
      </div>
    </PopoverContent>
  );
};

export default SignupComp;
