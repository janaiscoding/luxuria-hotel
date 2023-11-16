"use client";
import Button from "./ui/button";

const Header = () => {
  const list = [
    { name: "Home", active: true },
    { name: "About Us", active: false },
    { name: "Rooms", active: false },
    { name: "Contact us", active: false },
  ];
  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 z-50 bg-slate-50 px-20 shadow-md">
      <a href="/" className="text-xl font-semibold">
        Luxuria
      </a>
      <ul className="flex gap-10">
        {list.map((el, i) => (
          <li
            key={i}
            className={`${el.active && "underline"} hover:cursor-pointer`}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <Button
        content="Book room"
        ariaLabel="Book room button"
        onClick={() => {
          console.log("click book room");
        }}
        darkTheme={true}
      />
    </nav>
  );
};

export default Header;
