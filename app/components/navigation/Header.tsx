"use client";
import Button from "../ui/button-luxuria";
import { PopupForm } from "../booking_form/PopupForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileClient from "./ProfileClient";

const Header = () => {
  const list = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Rooms", link: "rooms" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact us", link: "contact" },
  ];
  const { user, error, isLoading } = useUser();
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
      {user && <ProfileClient />}
      {isLoading && <div>Loading user...</div>}
      {!isLoading && error && <div>Error</div>}
      {!isLoading && !user && <a href="/api/auth/login">Login</a>}
    </nav>
  );
};

export default Header;
