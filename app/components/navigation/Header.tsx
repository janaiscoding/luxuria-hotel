"use client";
import { SignInResponse, signIn } from "next-auth/react";
import ProfileClient from "./ProfileClient";
import { useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { SyntheticEvent, useState } from "react";

const Header = () => {
  const list = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Rooms", link: "rooms" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact us", link: "contact" },
  ];

  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center py-2 sticky top-0 z-50 bg-slate-50 px-4 shadow-md h-12">
      <a href="/" className="text-xl font-semibold">
        Luxuria
      </a>

      <ul className="md:flex gap-10 hidden">
        {list.map((el, i) => (
          <li key={i} className={`hover:cursor-pointer hover:text-orange-800`}>
            <a href={`/#${el.link}`}>{el.name}</a>
          </li>
        ))}
      </ul>
      {session?.user ? <ProfileClient user={session.user} /> : <LoginMethods />}
    </nav>
  );
};

const LoginMethods = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md hover:cursor-pointer">
          Sign in
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-6 flex flex-col items-center">
        <form className="" onSubmit={(e) => handleSubmit(e)}>
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
          <div>
            <button
              className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
              type="submit"
            >
              Sign in
            </button>
            <p>Don't have an account? Create one</p>
          </div>
        </form>
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
            className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
            type="submit"
          >
            Demo
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default Header;
