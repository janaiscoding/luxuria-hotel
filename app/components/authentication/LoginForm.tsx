import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { SyntheticEvent, useState } from "react";

const LoginForm = () => {
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
    <form className="text-sm flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
      <legend className="text-xl">Welcome back!</legend>

      <label htmlFor="email">
        Email
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label htmlFor="password">
        Password
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      {error && <p>{error}</p>}

      <button
        className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm
