"use client";

import { roomsData } from "@/app/lib/utils";
import { useState } from "react";
import ArrowUpRight from "../ui/arrow-up-right";
import Image from "next/image";
import ArrowRight from "../ui/arrow-right";
import ArrowLeft from "../ui/arrow-left";

// @carousel

// First i want to have a wrapper that displays limit elements: hidden-left limit x (display) hidden-right
const RoomsCarousel = ({ limit }: { limit: number }) => {
  const [startIx, setStartIx] = useState(limit);

  const handleBack = () => {
    setStartIx((prevState) => prevState - limit);
  };
  const handleForward = () => {
    setStartIx((prevState) => prevState + limit);
  };

  return (
    <div
      id="rooms-wrapper"
      className="flex flex-col md:flex-row gap-3 items-center justify-center"
    >
      <div id="controls-left-desktop" className="hidden md:block">
        {startIx >= limit ? (
          <button
            className="p-2 bg-zinc-800 hover:bg-zinc-900 text-slate-50 flex items-center justify-center"
            onClick={handleBack}
          >
            <ArrowLeft />
          </button>
        ) : (
          <button
            className="p-2 bg-zinc-300 text-slate-50 flex items-center justify-center hover:cursor-default"
            disabled={true}
          >
            <ArrowLeft />
          </button>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {roomsData.slice(startIx, startIx + limit).map((room) => (
          <RoomCard
            key={room.id}
            image={room.url}
            roomName={room.name}
            price={room.price}
          />
        ))}
      </div>

      <div id="controls-right-desktop" className="hidden md:block">
        {roomsData.length - startIx !== limit ? (
          <button
            className="p-2 bg-zinc-800 hover:bg-zinc-900 text-slate-50 flex items-center justify-center"
            onClick={handleForward}
          >
            <ArrowRight />
          </button>
        ) : (
          <button
            className="p-2 bg-zinc-300 text-slate-50 flex items-center justify-center hover:cursor-default"
            disabled={true}
          >
            <ArrowRight />
          </button>
        )}
      </div>

      <div id="carousel-controls-mobile" className="md:hidden flex gap-3">
        {startIx >= limit ? (
          <button
            className="p-2 bg-zinc-800 hover:bg-zinc-900 text-slate-50 flex items-center justify-center"
            onClick={handleBack}
          >
            <ArrowLeft />
          </button>
        ) : (
          <button
            className="p-2 bg-zinc-300 text-slate-50 flex items-center justify-center hover:cursor-default"
            disabled={true}
          >
            <ArrowLeft />
          </button>
        )}

        {roomsData.length - startIx !== limit ? (
          <button
            className="p-2 bg-zinc-800 hover:bg-zinc-900 text-slate-50 flex items-center justify-center"
            onClick={handleForward}
          >
            <ArrowRight />
          </button>
        ) : (
          <button
            className="p-2 bg-zinc-300 text-slate-50 flex items-center justify-center hover:cursor-default"
            disabled={true}
          >
            <ArrowRight />
          </button>
        )}
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
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex flex-col gap-2 relative"
      // onMouseEnter={() => setShowDetails(true)}
      // onMouseLeave={() => setShowDetails(false)}
    >
      <Image src={image} alt="room" width={350} className="rounded-md" />
      {/* {showDetails && ( */}
      <div className="absolute bg-zinc-950/90 w-full bottom-0 py-10 px-4 text-zinc-50">
        <div className="w-full flex justify-between">
          <h2 className="text-xl">{roomName}</h2>
          <h3 className="text-orange-300">${price}/Night</h3>
        </div>
        <button className="self-start flex items-center gap-2 text-sm hover:text-orange-300">
          <p>View Details</p>
          <ArrowUpRight />
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default RoomsCarousel;
