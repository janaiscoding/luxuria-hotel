"use client";
import Image from "next/image";
import Button from "../Button";
import room1 from "../../../public/gallery/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import room2 from "../../../public/gallery/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg";

const RoomsBooking = () => {
  const handleRead = () => {
    console.log("meow");
  };
  return (
    <div className="">
      <h1 className="text-5xl font-medium text-neutral-900 mb-10">
        Our rooms: Book your cozy <br /> getaway today
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="basis-full flex flex-col gap-6 items-start">
          <Image src={room1} alt={"Hotel room"} height={600} />
          <p className="text-neutral-900 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nemo
            distinctio velit alias nulla voluptates dolores harum repudiandae
            fugit reprehenderit sint hic atque sed ea aliquid odio laboriosam
            quo illo?
          </p>
          <Button
            content="Read more"
            ariaLabel="Read more button"
            onClick={handleRead}
            darkTheme={true}
          />
        </div>
        <div className=" flex flex-col-reverse gap-6 items-start mt-10">
          <Image
            src={room2}
            alt={"Hotel room"}
            width={800}
            className="shadow-xl"
          />
          <p className="text-neutral-900 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nemo
            distinctio velit alias nulla voluptates dolores harum repudiandae
            fugit reprehenderit sint hic atque sed ea aliquid odio laboriosam
            quo illo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomsBooking;
