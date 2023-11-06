"use client";
import Image from "next/image";
import Button from "../Button";
import room1 from "../../../public/gallery/jonas-allert-ZApUkahPK7c-unsplash.jpg";
import room2 from "../../../public/gallery/michel-stockman-sMh8FU25ZkE-unsplash.jpg";
import room3 from "../../../public/gallery/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg";
import room4 from "../../../public/gallery/visualsofdana-T5pL6ciEn-I-unsplash.jpg";

const RoomsIntro = () => {
  const handleRooms = () => {
    console.log("Click on see rooms");
  };
  return (
    <div className="flex flex-col md:flex-row gap-20 items-center">
      <article className="flex flex-col gap-6 items-start basis-full">
        <h1 className="text-3xl font-medium text-zinc-950">
          Perfect place for relaxation
        </h1>
        <p className="text-neutral-700">
          A cozy hotel room provides a sense of warmth and relaxations, making{" "}
          <br />
          guests feel right at home. Whether it&apos;s plush bedding, soft
          lighting, or <br /> inviting decor, these elements contribute to an
          atmorphere that promotes <br /> rest and rejuvenation after a long day
          of exploring or business meetings.
        </p>

        <Stats />
        <Button
          content="See rooms"
          ariaLabel="See rooms button"
          onClick={handleRooms}
          darkTheme={true}
        />
      </article>
      <RoomsGallery />
    </div>
  );
};
const RoomsGallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 basis-full">
      <Image src={room1} alt="hotel room" width={400} />
      <Image src={room2} alt="hotel room" width={400} />
      <Image src={room3} alt="hotel room" />
      <Image src={room4} alt="hotel room" />
    </div>
  );
};
const Stats = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">&gt;2000</h1>
        <p className="text-neutral-700">Satisfied guests</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">27</h1>
        <p className="text-neutral-700">Cozy rooms</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">7+</h1>
        <p className="text-neutral-700">Years of experience</p>
      </div>
    </div>
  );
};

export default RoomsIntro;
