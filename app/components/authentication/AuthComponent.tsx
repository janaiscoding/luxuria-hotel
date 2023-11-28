import { Popover, PopoverTrigger } from "@/components/ui/popover";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";

const AuthComponent = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md hover:cursor-pointer">
            Sign in
          </button>
        </PopoverTrigger>
        {showLogin ? (
          <LoginForm setShowLogin={setShowLogin} />
        ) : (
          <SignupForm setShowLogin={setShowLogin} />
        )}
      </Popover>
    );
  };


  export default AuthComponent;