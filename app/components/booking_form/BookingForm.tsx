"use client";
import { SyntheticEvent, useState } from "react";
import { DatePickerStart } from "./DatePickerStart";
import { InputGuests } from "./InputGuests";
import { useToast } from "@/components/ui/use-toast";
import { DatePickerEnd } from "./DatePickerEnd";
import createReservation from "@/app/api/createReservation";
import { useSession } from "next-auth/react";
import getUserIdFromEmail from "@/app/api/getUserId";

const BookingForm = () => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(); // always starts with today
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [guestsNumber, setGuestsNumber] = useState<number | undefined>();
  const [userID, setUserId] = useState<number | null>();

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!session || !userID) {
      toast({
        title: "Please sign in! :) Sorry~",
        variant: "destructive",
        description: `Sign in in top right of the screen to be able to place a reservation!`,
      });
    } else {
      //If an user is signed in get the userid based on unique email
      await fetch(`/api/users/${session.user!.email}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setUserId(data.userID.user_id);
        })
        .catch((err) => {
          console.log(err);
        });

      if (guestsNumber && arrivalDate && departureDate && userID) {
        createReservation(guestsNumber, arrivalDate, departureDate, userID);
      } else {
        // Not all fields were completed
        toast({
          title: "Missing information!",
          variant: "destructive",
          description: `Please complete all the required fields!`,
        });
      }
    }

    // clearData();
  };
  const clearData = () => {
    setArrivalDate(undefined);
    setDepartureDate(undefined);
    setGuestsNumber(undefined);
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
        <InputGuests guests={guestsNumber} setter={setGuestsNumber} />
        <button className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
