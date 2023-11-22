import guestIcon from "@/public/icons/traveler.png";
import roomIcon from "@/public/icons/living-room.png";
import experienceIcon from "@/public/icons/quality.png";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <Image src={guestIcon} alt="guest icon" width={80} />
        <div className="w-full">
          <p className="text-neutral-700 text-lg">Guests</p>
          <h1 className="font-medium text-orange-800 text-4xl">8,7k +</h1>
        </div>
      </div>
      {/* <div className="md:w-[1px] md:h-[4rem] flex-auto h-[1px] w-1/2 bg-orange-800/30"></div> */}
      <div className="flex gap-2 items-center justify-center">
        <Image src={roomIcon} alt="guest icon" width={80} />
        <div className="w-full">
          <p className="text-neutral-700 text-lg">Rooms</p>
          <h1 className="font-medium text-orange-800 text-4xl">270+</h1>
        </div>
      </div>
      {/* <div className="md:w-[1px] md:h-[4rem] flex-auto h-[1px] w-1/2 bg-orange-800/30"></div> */}
      <div className="flex gap-2 items-center justify-center">
        <Image src={experienceIcon} alt="guest icon" width={80} />
        <div className="w-full">
          <p className="text-neutral-700 text-lg">Years of experience</p>
          <h1 className="font-medium text-orange-800 text-4xl">20+</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
