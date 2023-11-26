import Testimonials from "./Testimonials";
import Stats from "./Stats";

const SocialProof = () => {
  return (
    <section id="social" className="bg-orange-100">
      <div className="max-w-screen-2xl m-auto py-20 px-4 flex flex-col items-center gap-10">
        <Testimonials />
        <Stats />
      </div>
    </section>
  );
};

export default SocialProof;
