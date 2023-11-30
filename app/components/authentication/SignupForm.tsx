import { Input } from "@/components/ui/input";
import { PopoverContent } from "@/components/ui/popover";
import { signIn } from "next-auth/react";
import { SetStateAction, SyntheticEvent, useState } from "react";

const SignupForm = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CFpassword, setCFPassword] = useState("");

  const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const pwPattern = new RegExp(/^.{8,}$/g);

  const [validEmail, setEmailValid] = useState<boolean | null>(null);
  const [validPW, setValidPW] = useState<boolean | null>(null);
  const [validConf, setValidConf] = useState<boolean | null>(null);

  const [error, setError] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // Create new acc in database
  };
  return (
    <PopoverContent className="w-full p-6">
      <form className="text-sm" onSubmit={(e) => handleSubmit(e)}>
        <legend className="text-xl">Create account</legend>

        <label htmlFor="name">
          Name{" "}
          {name.length === 25 && (
            <span className="text-xs text-red-800">
              *not longer than 25 chars
            </span>
          )}
          <Input
            type="text"
            maxLength={25}
            onChange={(e) => setName(e.target.value)}
            className={`${name.length === 25 && "border-solid border-red-500"}`}
          />
        </label>

        <label htmlFor="email">
          Email{" "}
          {!validEmail && (
            <span className="text-xs text-red-800">*must be valid email</span>
          )}
          <Input
            type="email"
            className={`${
              validEmail ? "border-solid border-green-200" : "border-red-500"
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailValid(emailPattern.test(e.target.value));
            }}
          />
        </label>

        <label htmlFor="password">
          Password{" "}
          {!validPW && (
            <span className="text-xs text-red-800">*minimum 8 chars</span>
          )}
          <Input
            type="password"
            className={`${
              validPW ? "border-solid border-green-200" : "border-red-500"
            }`}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidPW(pwPattern.test(e.target.value));
            }}
          />
        </label>
        <label htmlFor="password">
          Confirm Password{" "}
          {!validConf && (
            <span className="text-xs text-red-800">*passwords must match</span>
          )}
          <Input
            type="password"
            className={`${
              validConf ? "border-solid border-green-200" : "border-red-500"
            }`}
            onChange={(e) => {
              setCFPassword(e.target.value);
              setValidConf(password === e.target.value);
            }}
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
          Already have an account?{" "}
          <span onClick={() => setShowLogin(true)}>Sign in </span>
        </div>
      </div>
    </PopoverContent>
  );
};

export default SignupForm;
