import { PopoverContent } from "@/components/ui/popover";
import { SetStateAction } from "react";
import LoginForm from "./LoginForm";
import AuthProvidedMethods from "./AuthProvidedMethods";

const LoginComp = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <PopoverContent className="w-full p-6 flex flex-col items-center gap-2">
      <LoginForm />

      <div> or sign in using </div>
      <AuthProvidedMethods />

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
