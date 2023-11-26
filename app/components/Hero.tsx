import Image from "next/image";
import heroImage from "@/public/hero_hotel_image.jpg";
import Overlay from "./ui/Overlay";
import BookingForm from "./booking_form/BookingForm";

const Hero = () => {
  return (
    <section
      className="h-[80vh] w-full flex flex-col items-center justify-center relative"
      id="home"
    >
      <Image src={heroImage} alt="background" fill={true} priority placeholder="blur" style={{objectFit: "cover"}} className="w-auto" />
      <Overlay overlayHeight={80} />
      <HeroText />
      <BookingForm />
    </section>
  );
};

const HeroText = () => {
  return (
    <div className="z-20 text-center flex flex-col items-center justify-center gap-2 text-slate-50 drop-shadow">
      <p className="md:text-xl text-gray-300">Hotel Luxuria Experience</p>
      <h1 role="heading" className="text-3xl md:text-6xl font-bold">
        ENJOY A <span className="font-montserrat underline italic decoration-orange-500">UNIQUE</span><br></br> EXPERIENCE
      </h1>
      {/* <a
        href="/#rooms"
        className="py-2 px-4 text-zinc-950 bg-orange-300 hover:bg-orange-400"
      >
        Rooms & Suites
      </a> */}
    </div>
  );
};
export default Hero;
