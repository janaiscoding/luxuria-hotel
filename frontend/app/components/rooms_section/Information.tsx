"use client";
import Image from "next/image";
import Button from "../Button";
import room1 from "../../../public/gallery/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import room2 from "../../../public/gallery/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg";

const Information = () => {
  const handleRead = () => {
    console.log("meow");
  };
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="basis-full overflow-hidden">
          <Image src={room1} alt="room"/>
        </div>
        <div className="basis-full pl-28">
          <p className="text-neutral-600">THE LUXURIA HOTEL</p>
          <h1 className="font-medium text-5xl tracking-wider py-6">
            The Restaurant
          </h1>
          <p className="text-xl mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, id
            alias odit dicta, atque ullam nam amet eum laboriosam autem
            exercitationem eos recusandae excepturi odio distinctio minus
            minima! Assumenda, magnam.
          </p>
          <Button
            content="learn more"
            darkTheme={true}
            ariaLabel="learn more"
            onClick={handleRead}
          />
        </div>
      </div>
      {/* <div className="flex flex-col items-center">
      <div className="basis-full flex items-start">
          <div className="overflow-hidden basis-full">
            <Image
              src={room1}
              alt={"Hotel room"}
              width={600}
              className="card hover:scale-105"
            />
          </div>
          <div className="basis-full pl-6 flex flex-col gap-4 items-start">
            <h1 className="text-4xl font-medium text-neutral-900">
              The restaurant
            </h1>
            <p className="text-neutral-900 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              nemo distinctio velit alias nulla voluptates dolores harum
              repudiandae fugit reprehenderit sint hic atque sed ea aliquid odio
              laboriosam quo illo?
            </p>
            <Button
              content="Read more"
              ariaLabel="Read more button"
              onClick={handleRead}
              darkTheme={true}
            />
          </div>
        </div> */}
      {/* <div className="basis-full flex flex-row-reverse items-center justify-center">
          <div className="overflow-hidden basis-full">
            <Image
              src={room2}
              alt={"Hotel room"}
              width={600}
              className="card hover:scale-105"
            />
          </div>
          <div className="basis-full pr-6 flex flex-col gap-4 items-start justify-center">
            <h1 className="text-4xl font-medium text-neutral-900">
              The rooftop bar
            </h1>
            <p className="text-neutral-900 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              nemo distinctio velit alias nulla voluptates dolores harum
              repudiandae fugit reprehenderit sint hic atque sed ea aliquid odio
              laboriosam quo illo?
            </p>
            <Button
              content="Read more"
              ariaLabel="Read more button"
              onClick={handleRead}
              darkTheme={true}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Information;
