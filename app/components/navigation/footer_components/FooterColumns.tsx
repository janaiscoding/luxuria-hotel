import Newsletter from "./Newsletter";

const FooterColumns = () => {
  const col1 = ["Terms & Conditions", "Privacy Policy", "Help", "FAQs"];
  const col2 = ["About", "Contact", "Location", "Careers"];
  const col3 = ["Business", "Affiliate", "Press", "Blog"];
  return (
    <div className="text-sm flex justify-between text-zinc-400 mb-10">
      <ul className="flex flex-col gap-1">
        {col1.map((name, i) => (
          <li key={i} className="hover:text-neutral-50 hover:cursor-pointer">
            {name}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-1">
        {col2.map((name, i) => (
          <li key={i} className="hover:text-neutral-50 hover:cursor-pointer">
            {name}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-1">
        {col3.map((name, i) => (
          <li key={i} className="hover:text-neutral-50 hover:cursor-pointer">
            {name}
          </li>
        ))}
      </ul>
      <Newsletter />
    </div>
  );
};

export default FooterColumns;
