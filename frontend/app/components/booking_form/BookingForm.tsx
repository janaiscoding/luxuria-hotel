"use client";
import { SyntheticEvent, useState } from "react";
import { DatePicker } from "./DatePicker";
import { InputGuests } from "./InputGuests";
import { useToast } from "@/components/ui/use-toast";
import { DatePickerEnd } from "./DatePickerEnd";

const BookingForm = () => {
  const { toast } = useToast();

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState<number | undefined>();

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (guests && startDate && endDate) {
      // Call the api route from @app/api/create-reservation/route.ts with the specified method
      const res = await fetch(`/api/create-reservation/?guests=${guests}`, {
        method: "POST",
      });
      // Success
      if (res.ok) {
        // Display UI toast notification
        toast({
          title: "Reservation placed",
          variant: "success",
          description: `We received your reservation for ${guests} persons, we look forward to seeing you!`,
        });
      } else {
        // Db error
        toast({
          title: "Unexpected Error.",
          variant: "destructive",
          description: `Sorry! A server error has occured, please try again later.`,
        });
      }
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
        <DatePicker date={startDate} setter={setStartDate} content="Check in" />
        <DatePickerEnd
          start={startDate}
          date={endDate}
          setter={setEndDate}
          content="Check out"
        />
        <InputGuests setter={setGuests} />
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
