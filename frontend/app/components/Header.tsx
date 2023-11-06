const Header = () => {
  const list = [
    { name: "Home", active: true },
    { name: "About Us", active: false },
    { name: "Room", active: false },
    { name: "Features", active: false },
    { name: "Contact us", active: false },
  ];
  return (
    <nav className="flex justify-between items-center py-4 px-60">
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
      <button className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800">
        Book room
      </button>
    </nav>
  );
};

export default Header;
