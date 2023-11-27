"use client";
import ProfileClient from "./ProfileClient";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Header = () => {
  const list = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Rooms", link: "rooms" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact us", link: "contact" },
  ];

  const { data: session } = useSession({ required: false });
  console.log(session);
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
      {session?.user ? (
        <ProfileClient user={session.user} />
      ) : (
        <a href="/api/auth/signin">Sign in</a>
      )}
    </nav>
  );
};

export default Header;
