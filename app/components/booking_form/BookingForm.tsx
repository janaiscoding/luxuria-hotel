"use client";
import { SyntheticEvent, useState } from "react";
import { DatePickerStart } from "./DatePickerStart";
import { DatePickerEnd } from "./DatePickerEnd";
import createBooking from "@/app/api/createBooking";
import missingInfoPopup from "../popups/missingInfoPopup";
import SelectorGuests from "./SelectorGuests";

const BookingForm = () => {
  // UI Helpers
  // To be able to force a re-render on selector group so that it goes back to default showing placeholder value
  //https://github.com/radix-ui/primitives/issues/1569#issuecomment-1434801848 solution found here
  const [key, setKey] = useState<number>(+new Date());
  const [buttonText, setButtonText] = useState("Book");

  // Mandatory form data
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(); // always starts with today
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [guestsNumber, setGuestsNumber] = useState<number | undefined>();

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    // As soon as the form is submitted, change button innerText so that it displays a loading effect
    setButtonText("Loading...");
    // Will create reservation, display success/error message and clear data on success.
    if (guestsNumber && arrivalDate && departureDate) {
      // Create a booking obj which will be sent to req.body by using JSON.stringify
      const bookingObj = {
        guestsNumber,
        arrivalDate,
        departureDate,
      };
      // This is protected server side, which means that only signed in users are able to make bookings, but that's checked on the server
      createBooking(bookingObj, clearData);
      // Adding this in case of session error, it won't clean the form fields but it will stop the btn from showing loading state
      setButtonText("Book");
    } else {
      // Not all fields were completed, display missing info popup
      missingInfoPopup();
      // Revert book btn back to default
      setButtonText("Book");
    }
  };
  const clearData = () => {
    // Clear all form data
    setArrivalDate(undefined);
    setDepartureDate(undefined);
    setGuestsNumber(undefined);
    //@ts-ignore
    setGuestsNumber(undefined);
    // Restore button to default
    setButtonText("Book");
    // Force re-render for selector group to show placeholder again
    setKey(+new Date());
  };

  return (
    <form
      aria-label="form"
      id="booking-form"
      onSubmit={(e) => handleBook(e)}
      className="flex md:flex-row flex-col gap-2 p-10 shadow-md z-20 bg-slate-50 md:max-w-2xl -translate-y-1/2"
    >
      {/* <legend className="text-zinc-700">Place a booking now, fast, easy, secure!</legend> */}

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
      <SelectorGuests
        myKey={key}
        guestsNumber={guestsNumber}
        setter={setGuestsNumber}
      />
      <button
        id="BSB"
        type="submit"
        className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default BookingForm;
