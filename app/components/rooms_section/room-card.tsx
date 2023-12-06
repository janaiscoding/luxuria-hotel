import Image from "next/image";
import { useState } from "react";
import ArrowUpRight from "../ui/arrow-up-right";

const RoomCard = ({
  image,
  roomName,
  price,
}: {
  image: any;
  roomName: string;
  price: number;
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex flex-col gap-2 relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Image
        src={image}
        alt="room"
        width={350}
        height={600}
        className={`max-h-[500px] ${!showDetails && "grayscale-[50%]"}`}
      />
      {showDetails && (
        <div className="hidden md:block absolute bg-zinc-950/90 w-full bottom-0 py-10 px-4 text-zinc-50">
          <div className="w-full flex justify-between">
            <h2 className="text-xl">{roomName}</h2>
            <h3 className="text-orange-300">${price}/Night</h3>
          </div>
          <button className="self-start flex items-center gap-2 text-sm hover:text-orange-300">
            <p>View Details</p>
            <ArrowUpRight />
          </button>
        </div>
      )}

      <div className="md:hidden absolute bg-zinc-950/90 w-full bottom-0 py-10 px-4 text-zinc-50">
        <div className="w-full flex justify-between">
          <h2 className="text-xl">{roomName}</h2>
          <h3 className="text-orange-300">${price}/Night</h3>
        </div>
        <button className="self-start flex items-center gap-2 text-sm hover:text-orange-300">
          <p>View Details</p>
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};
export default RoomCard;
