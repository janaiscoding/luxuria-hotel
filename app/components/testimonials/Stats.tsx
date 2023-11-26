import guestIcon from "@/public/icons/traveler.png";
import roomIcon from "@/public/icons/living-room.png";
import experienceIcon from "@/public/icons/quality.png";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <Image src={guestIcon} alt="guest icon" width={80} />
        <div>
          <p className="text-neutral-700 text-lg">Guests</p>
          <h1 className="font-medium text-orange-800 text-4xl">8,7k +</h1>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center ">
        <Image src={roomIcon} alt="guest icon" width={80} />
        <div>
          <p className="text-neutral-700 text-lg">Rooms</p>
          <h1 className="font-medium text-orange-800 text-4xl">100+</h1>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center ">
        <Image src={experienceIcon} alt="guest icon" width={80} />
        <div>
          <p className="text-neutral-700 text-lg">Years in Business</p>
          <h1 className="font-medium text-orange-800 text-4xl">20+</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
