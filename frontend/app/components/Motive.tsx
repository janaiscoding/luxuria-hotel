import { motiveList } from "../lib/data";

const Motive = () => {
  return (
    <section id="motive" className="bg-neutral-900">
      <div className="max-w-screen-2xl m-auto py-20 px-4">
        <h1 className="text-4xl font-medium text-neutral-50 mb-10">
          Why choose our hotel?
        </h1>
        <ul className="flex gap-10 flex-col md:flex-row">
          {motiveList.map((el, i) => (
            <li className="basis-full" key={i}>
              <h2 className="font-semibold text-xl text-neutral-100 mb-4">
                {el.title}
              </h2>
              <p className="text-neutral-400">{el.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Motive;
