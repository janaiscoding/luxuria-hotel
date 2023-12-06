"use client";

import { useState } from "react";
import SelectorTab from "./SelectorTab";
import RoomsGallery from "./RoomsGallery";
import InfoPopup from "../ui/InfoPopup";

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState<string>("single");
  const infoText =
    "At its current stage, this section serves presentation purposes exclusively. Yet, it holds the potential for dynamic user room selection through a REST API, allowing administrators to add or remove rooms with data and images stored on a CDN. This design underscores the project's scalability for future enhancements, as this is a work in progress personal project. 😊";
  return (
    <section id="rooms">
      <div className="max-w-screen-2xl m-auto py-10 px-4 flex flex-col items-start md:items-center gap-2">
        <div className="flex gap-1 items-center mb-4">
          <h1 className="text-center text-4xl md:text-6xl font-medium text-zinc-950">
            Rooms & Suites
          </h1>
          <InfoPopup
            title="ℹ️"
            className="bg-red-400 text-sm font-bold p-2 rounded-md hover:cursor-pointer hover:bg-red-500"
            content={infoText}
          />
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
