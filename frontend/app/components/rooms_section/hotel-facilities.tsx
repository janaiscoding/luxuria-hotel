const HotelFacilities = () => {
  return (
    <div id="facilities" className="flex flex-col gap-4 items-start basis-full">
      <h3 className="text-zinc-500">Best Experiences</h3>
      <h1 className="text-4xl font-medium">Hotel Facilities</h1>
      <div className="grid grid-cols-3 gap-6 rounded-sm">
        <FacilityCard
          icon={"International Cruises"}
          title="International Cruises"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
        <FacilityCard
          icon={"hey"}
          title="wifi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
        <FacilityCard
          icon={"hey"}
          title="wifi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
        <FacilityCard
          icon={"hey"}
          title="wifi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
        <FacilityCard
          icon={"hey"}
          title="wifi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
        <FacilityCard
          icon={"hey"}
          title="wifi"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro mollitia ea ducimus ipsum accusantium quos quibusdam"
        />
      </div>
    </div>
  );
};

const FacilityCard = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="border border-orange-300 p-4">
      <div>icon</div>
      <h3 className="font-medium text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HotelFacilities;
