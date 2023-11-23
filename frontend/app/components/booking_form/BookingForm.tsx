import { SyntheticEvent, useState } from "react";
import { DatePicker } from "./DatePicker";
import { Input } from "@/components/ui/input";
import { InputGuests } from "./InputGuests";

const BookingForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState<number | undefined>();

  const handleBook = (e: SyntheticEvent) => {
    console.log(startDate, endDate, guests);
  };

  return (
    <div className="z-20 absolute top-[80%] left-1/2 -translate-x-1/2 shadow-md bg-orange-300">
      <form
        aria-label="form"
        onSubmit={(e) => handleBook(e)}
        className="hidden md:flex gap-10 p-10 m-auto items-center justify-center shadow-md"
      >
        <DatePicker
          date={startDate}
          setter={setStartDate}
          content="Arrival Day"
        />
        <DatePicker
          date={endDate}
          setter={setEndDate}
          content="Departure Day"
        />
        <InputGuests setter={setGuests} />

        <button className="py-2 px-4 text-zinc-50 bg-zinc-950 hover:bg-zinc-900 self-end">
          Book now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
