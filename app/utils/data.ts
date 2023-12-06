import singleRoom from "@/public/gallery/horizontal_room_1.jpg";
import kingRoom from "@/public/gallery/horizontal_room_2.jpg";
import doubleRoom from "@/public/gallery/horizontal_room_3.jpg";
import deluxeRoom from "@/public/gallery/horizontal_room_4.jpg";

export const motiveList = [
  {
    title: "Best Locations",
    description:
      "Selecting the ideal hotel involves considering the location, a pivotal factor in crafting a delightful experience for guests. Optimal convenience, accessibility, and overall satisfaction hinge on finding the right location.",
  },
  {
    title: "Fast & easy booking",
    description:
      "When it comes to choosing a hotel, a seamless and quick booking process is essential. A hassle-free reservation experience enhances overall satisfaction for guests, ensuring convenience and accessibility.",
  },
  {
    title: "Room Service",
    description:
      "In the quest for the perfect hotel, the significance of location cannot be overstated. A well-chosen location not only ensures convenience and accessibility but also contributes significantly to overall guest satisfaction.",
  },
];
export const roomTypes = ["single", "king", "double", "deluxe"];

export const roomsData = [
  {
    id: 0,
    name: "Single Room",
    type: "single",
    url: singleRoom,
    price: 170,
  },
  {
    id: 1,
    name: "King Room",
    type: "king",
    url: kingRoom,
    price: 270,
  },
  {
    id: 2,
    name: "Double Room",
    type: "double",
    url: doubleRoom,
    price: 170,
  },
  {
    id: 3,
    name: "Deluxe Room",
    type: "deluxe",
    url: deluxeRoom,
    price: 170,
  },
];
