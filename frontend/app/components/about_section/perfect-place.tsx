"use client";
import Image from "next/image";
import telephone from "@/public/icons/telephone.png";
import email from "@/public/icons/email.png";
import verticalRoom2 from "@/public/gallery/vertical_room_2.jpg";
import horizontalRoom1 from "@/public/gallery/horizontal_room_1.jpg";
import horizontalRoom2 from "@/public/gallery/horizontal_room_2.jpg";

const PerfectPlace = () => {
  const handleRooms = () => {
    console.log("Click on see rooms");
  };

  return (
    <div className="flex flex-col justify-between md:flex-row gap-10">
      <article className="flex flex-col gap-2 items-start basis-full ">
        <div>
          ⭐⭐⭐⭐⭐
          <p className="text-zinc-500">Luxuria Hotels</p>
        </div>
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-4xl font-medium text-zinc-950">
            Comfort & design. <br></br> The perfect place for relaxation
          </h1>
          <p className="text-zinc-700 text-lg">
            A cozy hotel room provides a sense of warmth and relaxations, making{" "}
            <br />
            guests feel right at home. Whether it&apos;s plush bedding, soft
            lighting, or <br /> inviting decor, these elements contribute to an
            atmorphere that promotes <br /> rest and rejuvenation after a long
            day of exploring or business meetings.
          </p>
        </div>
      </article>
      <Image
        src={horizontalRoom2}
        alt="hotel room"
        className="basis-full self-end"
        width={700}
      />
    </div>
  );
};

const RoomsGallery = () => {
  return (
    <div className="basis-full flex gap-2 h-full">
      <div className="flex flex-col gap-2 space-between w-1/2 h-full">
        <Image src={verticalRoom2} alt="hotel room" />
        <Image src={horizontalRoom1} alt="hotel room" />
      </div>
      <div className="flex flex-col gap-2 space-between w-1/2 h-full">
        <Image src={horizontalRoom2} alt="hotel room" />
        <Image src={verticalRoom2} alt="hotel room" />
      </div>
    </div>
  );
};

export default PerfectPlace;
