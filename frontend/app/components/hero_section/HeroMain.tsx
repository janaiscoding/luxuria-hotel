import Image from "next/image";
import hotel_room from "../../../public/hotel_room.jpg";
import ButtonHeroWrapper from "./ButtonHeroWrapper";
import HeroContent from "./HeroContent";

const HeroMain = () => {
  return (
    <section className="flex gap-28" id="hero">
      <Image
        src={hotel_room}
        height={700}
        alt="Luxurious and relaxing hotel room with a double bed"
        className="z-[1]"
      />
      <div className="py-20 flex flex-col gap-6">
        <HeroContent />
        <ButtonHeroWrapper />
      </div>
    </section>
  );
};
export default HeroMain;
