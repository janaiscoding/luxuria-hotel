import Image from "next/image";
import verticalRoom1 from "@/public/gallery/vertical_room_1.jpg";
import verticalRoom2 from "@/public/gallery/vertical_room_2.jpg";
import horizontalRoom1 from "@/public/gallery/horizontal_room_1.jpg";
import ArrowUpRight from "../ui/arrow-up-right";
const RoomsAndSuites = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h3 className="text-zinc-500">Luxuria Hotels</h3>
      <h1 className="text-6xl font-medium text-zinc-950">Rooms & Suites</h1>
      <div
        id="rooms-wrapper"
        className="basis-full flex gap-4 flex-wrap items-center justify-between"
      >
        <RoomCard image="" roomName="Deluxe Twin Room" price={340} />
        <RoomCard image="" roomName="Standard Room" price={170} />
        <RoomCard image="" roomName="Deluxe Twin Room" price={340} />
        <RoomCard image="" roomName="Executive Room" price={250} />
      </div>
    </div>
  );
};

const RoomCard = ({
  image,
  roomName,
  price,
}: {
  image: any;
  roomName: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={verticalRoom2}
        alt="room"
        width={350}
        className="rounded-md grayscale-[30%] hover:grayscale-0"
      />
      <div className="w-full flex justify-between">
        <h2 className="text-xl">{roomName}</h2>
        <h3 className="text-orange-800">${price}/Night</h3>
      </div>
      <button className="self-start flex items-center gap-2 text-sm hover:text-orange-800">
        <p>View Details</p>
        <ArrowUpRight />
      </button>
    </div>
  );
};

export default RoomsAndSuites;
