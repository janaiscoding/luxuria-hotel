const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900">
      <div className="max-w-screen-2xl m-auto py-20 px-4 text-zinc-400 text-sm flex justify-between">
        <Column />
        <Column />
        <Column />
        <Newsletter />
      </div>
      <div className="max-w-screen-2xl m-auto py-10 text-zinc-400 text-sm flex justify-between border-t border-zinc-600">
        <div className="flex gap-4 items-baseline">
          <h1 className="text-3xl font-bold text-neutral-50">Luxuria</h1>
          <p className="text-zinc-400 align-baseline">© {new Date().getFullYear()} Luxuria Hotel</p>
        </div>
        <div className="flex gap-1">
            <p>Social icons</p>
            <p>Social icons</p>
            <p>Social icons</p>
        </div>
      </div>
    </footer>
  );
};
const Column = () => {
  const x = ["Terms & Conditions", "Privacy Policy", "Help", "Affiliate"];
  return (
    <ul className="flex flex-col gap-1">
      {x.map((x, i) => (
        <li key={i} className="hover:text-neutral-50 hover:cursor-pointer">
          {x}
        </li>
      ))}
    </ul>
  );
};

const Newsletter = () => {
  return (
    <div>
      <p>Sign up to get our newsletter</p>
      <input placeholder="Your email..."></input>
    </div>
  );
};
export default Footer;
