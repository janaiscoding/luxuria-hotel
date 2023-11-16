"use client";

const Hero = () => {
  return (
    <section
      className="h-[80vh] w-full flex flex-col items-center justify-center static"
      id="home"
    >
      <div className="max-h-[80vh] h-[80vh] w-full bg-zinc-950/70 absolute z-10"></div>
      <div className="z-20 text-center flex flex-col items-center justify-center gap-6">
        <h2 className="text-xl text-gray-300">Hotel Luxuria Experience</h2>
        <h1 className="text-6xl text-slate-50 font-bold">
          ENJOY A UNIQUE<br></br> EXPERIENCE
        </h1>
        <a
          href="/rooms"
          className="py-2 px-4 text-zinc-950 bg-orange-300 hover:bg-orange-400"
        >
          Rooms & Suites
        </a>
      </div>
      <div className="absolute z-20 bottom-0 w-1/2 -translate-y-1/2 bg-orange-300/90 hover:bg-orange-300 hidden md:flex flex-wrap items-center justify-between gap-3 p-10 rounded-md text-start text-neutral-950 text-lg">
        <div className="">
          <h1>Arrival date</h1>
          <input type="date" />
        </div>
        <div className="">
          <h1>Departure date</h1>
          <input type="date" />
        </div>
        <div className="">
          <h1>Guests</h1>
          <input type="number" />
        </div>
        <button className="py-2 px-4 text-zinc-50 bg-zinc-950 hover:bg-zinc-900 self-end">
          Book now
        </button>
      </div>
    </section>
  );
};

export default Hero;
