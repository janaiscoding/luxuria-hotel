"use client";
import { SyntheticEvent, useEffect, useState } from "react";
import { DatePickerStart } from "./DatePickerStart";
import { InputGuests } from "./InputGuests";
import { useToast } from "@/components/ui/use-toast";
import { DatePickerEnd } from "./DatePickerEnd";
import createReservation from "@/app/api/createReservation";
import { useSession } from "next-auth/react";
import getUserIdFromEmail from "@/app/api/getUserId";
import loginPopup from "../popups/loginPopup";
import missingInfoPopup from "../popups/missingInfoPopup";

const BookingForm = () => {
  const { data: session } = useSession();

  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(); // always starts with today
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [guestsNumber, setGuestsNumber] = useState<number | undefined>();

  const bookingSubmitButton = document.getElementById(
    "BSB"
  ) as HTMLButtonElement;
  const inputGuestsNumber = document.getElementById("IGN") as HTMLInputElement;

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    // As soon as the form is submitted, change button innerText so that it displays a loading effect
    bookingSubmitButton.innerText = "Loading...";
    !session && loginPopup();
    if (session && session.user) {
      // Grab user ID from session user email so we can add it to booking (DB Relationship: One to One)
      const userID = await getUserIdFromEmail(session.user.email!);
      // Only if all info was provided, call the reservation API endpoint. Fetching is abstracted within the createReservation function
      if (guestsNumber && arrivalDate && departureDate && userID) {
        // Will create reservation, display success/error message and clear data on success.
        createReservation(
          guestsNumber,
          arrivalDate,
          departureDate,
          userID,
          clearData
        );
      } else {
        // Not all fields were completed, display missing info popup
        missingInfoPopup();
      }
    }
  };
  const clearData = () => {
    // Clear all data
    setArrivalDate(undefined);
    setDepartureDate(undefined);
    setGuestsNumber(undefined);
    inputGuestsNumber.value = "";
    // Restore button to default
    bookingSubmitButton.innerText = "Book";
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

        <button
          id="BSB"
          type="submit"
          className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
