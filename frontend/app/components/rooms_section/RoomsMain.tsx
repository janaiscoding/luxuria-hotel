import Information from "./Information";
import RoomsIntro from "./RoomsIntro";

const RoomsMain = () => {
  return (
    <section id="rooms" className="px-4 md:px-28 lg:px-44 xl:px-60 flex flex-col gap-6 py-10">
      <RoomsIntro />
      <Information />
    </section>
  );
};

export default RoomsMain;
