"use client";
import { SyntheticEvent, useState } from "react";
import { DatePickerStart } from "./DatePickerStart";
import { InputGuests } from "./InputGuests";
import { useToast } from "@/components/ui/use-toast";
import { DatePickerEnd } from "./DatePickerEnd";
import createReservation from "@/app/api/createReservation";

const BookingForm = () => {
  const { toast } = useToast();

  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(); // always starts with today
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [guestsNumber, setGuestsNumber] = useState<number | undefined>();

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (guestsNumber && arrivalDate && departureDate) {
      createReservation(guestsNumber, arrivalDate, departureDate);
      setArrivalDate(undefined);
      setDepartureDate(undefined);
      setGuestsNumber(undefined);
    } else {
      // Not all fields were completed
      toast({
        title: "Missing information!",
        variant: "destructive",
        description: `Please complete all the required fields!`,
      });
    }
  };


  return (
    <div className="z-20 absolute top-[90%] left-1/2 -translate-x-1/2 shadow-md bg-slate-50 font-lora">
      <form
        aria-label="form"
        onSubmit={(e) => handleBook(e)}
        className="hidden md:flex gap-1 p-10 items-center justify-center shadow-md"
      >
        <DatePickerStart
          date={arrivalDate}
          end={departureDate}
          setter={setArrivalDate}
          content="Check in"
        />
        <DatePickerEnd
          start={arrivalDate}
          date={departureDate}
          setter={setDepartureDate}
          content="Check out"
        />
        <InputGuests setter={setGuestsNumber} />
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
