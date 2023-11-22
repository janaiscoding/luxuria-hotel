"use client";

const Hero = () => {
  return (
    <section
      className="h-[80vh] w-full flex flex-col items-center justify-center static"
      id="home"
    >
      <div className="max-h-[80vh] h-[80vh] w-full bg-zinc-950/70 absolute z-10"></div>
      <div className="z-20 text-center flex flex-col items-center justify-center gap-6">
        <p className="text-xl text-gray-300">Hotel Luxuria Experience</p>
        <h1 role="heading" className="text-6xl text-slate-50 font-bold">
          ENJOY A UNIQUE<br></br> EXPERIENCE
        </h1>
        <a
          href="/rooms"
          className="py-2 px-4 text-zinc-950 bg-orange-300 hover:bg-orange-400"
        >
          Rooms & Suites
        </a>
      </div>
    </section>
  );
};

export default Hero;
