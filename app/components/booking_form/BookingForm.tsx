"use client";
import { SyntheticEvent, useEffect, useState } from "react";
import { DatePickerStart } from "./DatePickerStart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [key, setKey] = useState<number>(+new Date()); // To be able to force a re-render on selector group so that it goes back to default showing placeholder value
  //https://github.com/radix-ui/primitives/issues/1569#issuecomment-1434801848 solution found here
  const [buttonText, setButtonText] = useState("Book");

  const handleBook = async (e: SyntheticEvent) => {
    e.preventDefault();
    // As soon as the form is submitted, change button innerText so that it displays a loading effect
    setButtonText("Loading...");
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
        clearData();
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
    //@ts-ignore
    setGuestsNumber(undefined);
    // Restore button to default
    setButtonText("Book");
    // Force re-render for selector group
    setKey(+new Date());
  };

  return (
    <div className="z-20 absolute top-[85%] left-1/2 -translate-x-1/2 shadow-md bg-slate-50 font-lora">
      <form
        aria-label="form"
        onSubmit={(e) => handleBook(e)}
        className="hidden md:flex flex-col gap-2 p-10 shadow-md"
      >
        {/* <legend className="text-zinc-700">Place a booking now, fast, easy, secure!</legend> */}
        <div className="flex gap-1 items-center justify-center">
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
          <Select
            key={key}
            value={guestsNumber?.toString()}
            onValueChange={(value) => setGuestsNumber(parseInt(value))}
          >
            <SelectTrigger className="w-[280px] text-muted-foreground hover:text-accent-foreground">
              <SelectValue placeholder="Persons" />
            </SelectTrigger>
            <SelectContent className="hover:cursor-pointer">
              <SelectItem value="1" className="hover:cursor-pointer">
                1 person
              </SelectItem>
              <SelectItem value="2" className="hover:cursor-pointer">
                2 persons
              </SelectItem>
              <SelectItem value="3" className="hover:cursor-pointer">
                3 persons
              </SelectItem>
              <SelectItem value="4" className="hover:cursor-pointer">
                4 persons
              </SelectItem>
            </SelectContent>
          </Select>

          <button
            id="BSB"
            type="submit"
            className="border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
