import FiveStars from "@/app/lib/FiveStarsSVG";

const Testimonials = () => {
  return (
    <article className="flex items-center justify-center flex-col gap-10 text-center">
      <div>
        {" "}
        <p className="tracking-widest text-zinc-500">TESTIMONIALS</p>
        <h1 className="text-4xl font-bold text-zinc-950">What Clients Say</h1>
      </div>
      <div className="italic text-lg max-w-md ">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint
        fuga ducimus tenetur possimus eveniet doloremque dolor harum illum."
      </div>
      <div className="flex flex-col gap-1 items-center">
        <FiveStars />
        <div className="flex gap-1">
          <p>John Smith - Review from </p>
          <img
            src="https://tripadvisor.mediaroom.com/images/Tripadvisor_Logo_circle-green_horizontal-lockup_registered_RGB.svg"
            width={100}
          />
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
