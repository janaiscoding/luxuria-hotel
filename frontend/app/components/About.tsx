const WhyChoose = () => {
  const motiveList = [
    {
      title: "Best Locations",
      description:
        "When it comes to choosing a hotel, location plays a crucial role in ensuring a good experience for guests. The right location can make all the difference in terms of convienience, acessibility and overall satisfaction.",
    },
    {
      title: "Fast & easy booking",
      description:
        "When it comes to choosing a hotel, location plays a crucial role in ensuring a good experience for guests. The right location can make all the difference in terms of convienience, acessibility and overall satisfaction.",
    },
    {
      title: "Rooms",
      description:
        "When it comes to choosing a hotel, location plays a crucial role in ensuring a good experience for guests. The right location can make all the difference in terms of convienience, acessibility and overall satisfaction.",
    },
  ];
  return (
    <div className="bg-neutral-900 py-10 px-4 md:py-20  md:px-60">
      <h1 className="text-2xl font-bold text-neutral-50 mb-10">Why choose our boutique hotel?</h1>
      <ul className="flex gap-10 flex-col md:flex-row">
        {motiveList.map((el, i) => (
          <MotiveCard key={i} title={el.title} description={el.description} />
        ))}
      </ul>
    </div>
  );
};

const MotiveCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="basis-full">
      <h2 className="font-semibold text-neutral-100 mb-4">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </li>
  );
};

export default WhyChoose;
