import Image from "next/image";
import horizontalRoom2 from "@/public/gallery/horizontal_room_2.jpg";

const About = () => {
  return (
    <section id="about" className="max-w-screen-2xl m-auto py-20 px-4">
      <div className="flex flex-col justify-between lg:flex-row gap-10">
        <article className="flex flex-col gap-2 items-start basis-full ">
          <div>
            ⭐⭐⭐⭐⭐
            <p className="text-zinc-500">Luxuria Hotels</p>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <h1 className="text-4xl font-medium text-zinc-950">
              Comfort & design. <br></br> The perfect place for relaxation
            </h1>
            <p className="text-zinc-700 text-lg lg:w-3/4">
              A comfortable hotel room creates an atmosphere of warmth and
              relaxation, instantly making guests feel at home. Whether it's
              luxurious bedding, gentle lighting, or inviting decor, these
              elements collectively foster an environment that encourages rest
              and rejuvenation after a day of exploration or business meetings
            </p>
          </div>
        </article>
        <Image
          src={horizontalRoom2}
          alt="hotel room"
          className="lg:self-end"
          width={700}
        />
      </div>
    </section>
  );
};

export default About;
