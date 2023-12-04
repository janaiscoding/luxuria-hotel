"use client";

import { useState } from "react";
import SelectorTab from "./SelectorTab";
import RoomsGallery from "./RoomsGallery";
import InfoPopup from "../ui/InfoPopup";

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState<string>("single");
  const infoText =
    " Hey there! 😊 This section is for presentation purposes only -  for now. In the future, this could become a place where normal users can select their preferred room, with dynamic pages for each room ( room data could be fetched from the REST API for  example) and where admin users can insert new rooms (or delete)  with data and images stored on a CDN.";
  return (
    <section id="rooms">
      <div className="max-w-screen-2xl m-auto py-10 px-4 flex flex-col items-start gap-2">
        <div className="flex gap-1 items-center mb-4">
          <h1 className="text-center text-4xl md:text-6xl font-medium text-zinc-950">
            Rooms & Suites
          </h1>
          <InfoPopup title="ℹ️" className="bg-red-400 text-sm font-bold p-2 rounded-md hover:cursor-pointer hover:bg-red-500" content={infoText} />
        </div>
        <SelectorTab
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <RoomsGallery activeCategory={activeCategory} />
      </div>
    </section>
  );
};

export default Rooms;
