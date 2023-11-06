import Image from "next/image";
import hotel_room from "../../public/hotel_room.jpg";

const HeroSection = () => {
  return (
    <div className="flex gap-20">
      <Image
        src={hotel_room}
        
        height={600}
        alt="Luxurious and relaxing hotel room with a double bed"
        className="z-[1]"
      />
      <section className="py-20 flex flex-col gap-6">
        <h1 className="text-6xl" style={{ lineHeight: "1.2" }}>
          Choose your <br /> luxurious room
        </h1>
        <p className="">
          An intimate, very private boutique hotel, comprising 19 individually<br />
          themed bedrooms and suites each furnished with an extraordinary<br />
          variety of valuable antique furtniture and art.
        </p>
        <div className="flex gap-4">
          <button className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800">
            About us
          </button>
          <button className="border border-solid border-zinc-950 py-2 px-6">
            See rooms
          </button>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
