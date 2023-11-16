"use client";
import Image from "next/image";
import room1 from "@/public/gallery/michel-stockman-sMh8FU25ZkE-unsplash.jpg";
import Button from "../ui/button";

const TheRooftopBar = () => {
  const handleRead = () => {
    console.log("meow");
  };
  return (
    <article className="flex flex-col md:flex-row-reverse gap-10 items-center">
      <div className="basis-full overflow-hidden">
        <Image src={room1} alt="room" />
      </div>
      <div className="flex flex-col gap-6 items-start basis-full">
        <h1 className="font-medium text-5xl tracking-wider">The Rooftop Bar</h1>
        <p className="text-xl w-4/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, id
          alias odit dicta, atque ullam nam amet eum laboriosam autem
          exercitationem eos recusandae excepturi odio distinctio minus minima!
          Assumenda, magnam.
        </p>
        <Button
          content="learn more"
          darkTheme={true}
          ariaLabel="learn more"
          onClick={handleRead}
        />
      </div>
    </article>
  );
};

export default TheRooftopBar;
