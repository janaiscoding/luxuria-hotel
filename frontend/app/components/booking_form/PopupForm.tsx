import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SyntheticEvent, useState } from "react";
import { DatePicker } from "./DatePicker";
import { InputPopup } from "./InputPopup";

export function PopupForm() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState<number | undefined>();

  const handleBook = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(startDate, endDate, guests);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
          Book
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form
          aria-label="form"
          onSubmit={(e) => handleBook(e)}
          className="flex flex-col gap-1 items-start justify-center"
        >
          <DatePicker
            date={startDate}
            setter={setStartDate}
            content="Check in"
          />
          <DatePicker date={endDate} setter={setEndDate} content="Check out" />
          <InputPopup setter={setGuests} />
          <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
            Book
          </button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
