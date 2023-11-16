"use client";
import { SyntheticEvent } from "react";

const BookingForm = () => {
  const handleBook = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Form was submitted");
  };
  return (
    <div className="z-50 flex">
      <form
        onSubmit={(e) => handleBook(e)}
        className="flex gap-10 p-10 m-auto items-center justify-center bg-slate-50 shadow-md"
      >
        <label>
          <p>Check In</p>
          <input type="date"></input>
        </label>
        <label>
          <p>Check Out</p>
          <input type="date"></input>
        </label>
        <label>
          <p>Persons</p>
          <input type="number"></input>
        </label>
        <button
          type="submit"
          className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800"
        >
          Book now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
