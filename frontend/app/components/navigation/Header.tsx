"use client";
import Button from "../ui/button-luxuria";
import { PopupForm } from "../booking_form/PopupForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileClient from "./ProfileClient";

const Header = () => {
  const list = [
    { name: "Home", active: true },
    { name: "About Us", active: false },
    { name: "Rooms", active: false },
    { name: "Contact us", active: false },
  ];
  const { user, error, isLoading } = useUser();
  return (
    <nav className="flex justify-between items-center py-2 sticky top-0 z-50 bg-slate-50 px-4 shadow-md">
      <a href="/" className="text-xl font-semibold">
        Luxuria
      </a>

      <ul className="md:flex gap-10 hidden">
        {list.map((el, i) => (
          <li
            key={i}
            className={`${el.active && "underline"} hover:cursor-pointer`}
          >
            {el.name}
          </li>
        ))}
      </ul>
      {user && <ProfileClient />}
      {isLoading && <div>Loading user...</div>}
      {!isLoading && !user && <a href="/api/auth/login">Login</a>}
    </nav>
  );
};

export default Header;
