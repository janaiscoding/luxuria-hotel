import { roomTypes } from "@/app/lib/utils";
import { SetStateAction } from "react";

// A component that deals with rendering room types and sorting them
// Takes an activeCategory and a setter and manipulates the tabs for displayed rooms
const SelectorTab = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {roomTypes.map((type, index) => (
        <li key={index}>
          <button
            onClick={() => setActiveCategory(type)}
            className={`${
              activeCategory.toLocaleLowerCase() === type
                ? "bg-neutral-900 text-slate-50"
                : "bg-slate-50 text-neutral-900 hover:bg-orange-100"
            } border border-slate-500 py-2 px-4 basis-full`}
          >
            {type[0].toLocaleUpperCase() + type.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SelectorTab;
