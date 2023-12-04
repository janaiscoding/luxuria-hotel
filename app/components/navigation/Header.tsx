"use client";
import UserSessionStatus from "../authentication/UserSessionStatus";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const list = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Rooms", link: "rooms" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Contact us", link: "contact" },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scroll(0, 0);
    } else {
      router.push("/");
    }
  };
  return (
    <nav className="py-2 sticky top-0 z-50 bg-slate-50 shadow-md h-12">
      <div className="max-w-screen-2xl m-auto px-4 flex justify-between items-center">
        <div
          className="text-xl font-semibold hover:cursor-pointer"
          onClick={handleLogoClick}
        >
          Luxuria
        </div>

        <ul className="md:flex gap-10 hidden">
          {list.map((el, i) => (
            <li
              key={i}
              className={`hover:cursor-pointer hover:text-orange-800`}
            >
              <a href={`/#${el.link}`}>{el.name}</a>
            </li>
          ))}
        </ul>
        <UserSessionStatus />
      </div>
    </nav>
  );
};

export default Header;
