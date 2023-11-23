const ContactInfo = () => {
  return (
    <div className="py-20 px-4">
      <p className="tracking-widest text-zinc-500">INFORMATION</p>
      <h1 className="text-6xl font-semibold mb-20">Contact Us</h1>
      <p className="text-2xl font-bold tracking-wider mb-6">
        City Name, <span className="text-zinc-400">Country</span>
      </p>
      <p className="text-zinc-500 mb-6">
        Number Street, Luxuria Building, City ZIP, Country.
      </p>
      <p className="text-zinc-950 text-lg font-bold tracking-wider mb-10">
        Email:{" "}
        <span className="font-normal text-zinc-500 hover:text-orange-400 hover:cursor-pointer">
          info@luxuria.com
        </span>
      </p>
      <p className="text-zinc-500 text-lg font-bold tracking-wider">
        Call directly:
      </p>
      <p className="text-2xl text-zinc-950">+00 (0) 123 456 7890</p>
    </div>
  );
};

export default ContactInfo;
