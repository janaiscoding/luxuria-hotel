
import { roomsData } from "@/app/lib/data";
import RoomCard from "./room-card";

const RoomsGallery = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <div className="flex gap-4 flex-wrap py-2">
      {roomsData
        .filter((r) => r.type === activeCategory)
        .map((room) => (
          <RoomCard
            key={room.id}
            image={room.url}
            roomName={room.name}
            price={room.price}
          />
        ))}
    </div>
  );
};

export default RoomsGallery;
