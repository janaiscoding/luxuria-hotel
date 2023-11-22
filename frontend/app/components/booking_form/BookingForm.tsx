const BookingForm = () => {
  return (
    <div className="absolute z-20 bottom-0 w-1/2 -translate-y-1/2 bg-orange-300/90 hover:bg-orange-300 hidden md:flex flex-wrap items-center justify-between gap-3 p-10 rounded-md text-start text-neutral-950 text-lg">
      <div className="">
        <h1>Arrival date</h1>
        <input type="date" />
      </div>
      <div className="">
        <h1>Departure date</h1>
        <input type="date" />
      </div>
      <div className="">
        <h1>Guests</h1>
        <input type="number" />
      </div>
      <button className="py-2 px-4 text-zinc-50 bg-zinc-950 hover:bg-zinc-900 self-end">
        Book now
      </button>
    </div>
  );
};
