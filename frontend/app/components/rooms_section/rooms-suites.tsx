import RoomsCarousel from "./carousel";

const RoomsAndSuites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-zinc-500">Luxuria Hotels</h3>
      <h1 className="text-center text-4xl md:text-6xl font-medium text-zinc-950 mb-4">
        Rooms<br></br> & Suites
      </h1>
      <div className="md:block hidden">
        <RoomsCarousel limit={3} />
      </div>
      <div className="md:hidden">
        <RoomsCarousel limit={1} />
      </div>
    </div>
  );
};

export default RoomsAndSuites;
