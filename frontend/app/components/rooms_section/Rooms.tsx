"use client";

import { useState } from "react";
import SelectorTab from "./SelectorTab";
import RoomsGallery from "./RoomsGallery";

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState<string>("single");
  return (
    <section id="rooms">
      <div className=" section-layout items-start gap-2">
        <h1 className="text-center text-4xl md:text-6xl font-medium text-zinc-950 mb-4">
          Rooms & Suites
        </h1>
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
