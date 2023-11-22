const Contact = () => {
  return (
    <section id="contact" className="section-layout md:flex-row">
      <div className="basis-full">map</div>
      <div className="basis-full">
        <p className="tracking-widest text-zinc-500">INFORMATION</p>
        <h1 className="text-6xl font-semibold mb-20">Contact us</h1>
        <p className="text-2xl font-bold tracking-wider mb-6">Melbourne, <span className="text-zinc-500">Australia</span></p>
        <p className="text-zinc-500 mb-6">
          269 King Str, 05th FLoor, Utral House Building, Melbourne, VIC 3000,
          Australia.
        </p>
        <p className="text-zinc-950 text-lg font-bold tracking-wider mb-10">Email: <span className="font-normal text-zinc-500 hover:text-orange-400 hover:cursor-pointer">info@luxuria.com</span></p>
        <p className="text-zinc-500 text-lg font-bold tracking-wider">Call directly:</p>
        <p className="text-2xl text-zinc-950">+99 (0) 344 956 4050</p>
      </div>
    </section>
  );
};

export default Contact;
