import { PopoverContent } from "@/components/ui/popover";
import { signIn } from "next-auth/react";
import { SetStateAction } from "react";
import LoginForm from "./LoginForm";

const LoginComp = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <PopoverContent className="w-full p-6 flex flex-col items-center gap-2">
      <LoginForm />


        <div> or sign in using </div>
        <div className="flex justify-evenly w-full">
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
                email: "myemail@mail.com",
                password: "mypw",
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
          Don't have an account?{" "}
          <span
            className="text-orange-800 hover:cursor-pointer hover:underline"
            onClick={() => setShowLogin(false)}
          >
            Create one
          </span>
        </div>
  
    </PopoverContent>
  );
};

export default LoginComp;
