import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { signIn } from "next-auth/react";
import { SetStateAction, SyntheticEvent, useState } from "react";

const LoginForm = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    }).then((res) => {
      if (res && !res.ok) {
        setError("Wrong email or password.");
      }
    });
  };
  return (
    <PopoverContent className="w-full p-6">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <legend>Welcome back!</legend>

        <label htmlFor="email">
          Email
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor="password">
          Password
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}

        <button
          className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
          type="submit"
        >
          Sign in
        </button>
      </form>

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
          Don't have an account?{" "}
          <span onClick={() => setShowLogin(false)}>Create one</span>
        </div>
      </div>
    </PopoverContent>
  );
};

export default LoginForm;
