import deleteBooking from "@/app/api/deleteBooking";
import getBookings from "@/app/api/getBookings";
import { TBooking } from "@/app/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BookingItem from "./BookingItem";
import ArrowDown from "../ui/arrow-down";
import ArrowUp from "../ui/arrow-up";

const DashboardContent = () => {
  const { data: session } = useSession();

  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);
  const [isLoading, setIsLoading] = useState(true);

  // Sorting bookings
  const [ascArrival, setAscArrival] = useState(true);
  const handleSortArrival = () => {
    setAscArrival(!ascArrival);
  };
  const fetchBookings = async () => {
    console.log("2");
    const userBookings = await getBookings("desc-guests-number");
    setBookings(userBookings);
  };

  const onDelete = (id: number) => {
    deleteBooking(id, fetchBookings);
  };

  useEffect(() => {
    if (session) {
      // When first loading, fetch the bookings
      fetchBookings();
      // Stop the loading effect
      setIsLoading(false);
    }
  }, [session?.user?.email]);

  return (
    <div className="max-w-7xl md:w-1/2 self-center h-full px-4 py-10 overflow-auto self-center basis-full flex flex-col gap-2">
      <h1 className="text-xl w-full">
        👋 Hello, {session?.user?.name}! Here you can see your bookings
      </h1>
      <div className="flex flex-col">
        <div className="flex text-center bg-slate-400 text-slate-800">
          <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
            <p>Arriving</p>
            <div onClick={handleSortArrival} className="hover:cursor-pointer">
              {ascArrival ? <ArrowDown /> : <ArrowUp />}
            </div>
          </div>
          <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
            <p>Departure</p>
          </div>
          <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
            <p>Guests</p>
          </div>
          <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
            <p>Cancel</p>
          </div>
        </div>
        {/* {isLoading && <p>Loading your bookings... Please wait...</p>}
        {session && !isLoading && bookings.length === 0 && (
          <p>You don't have any bookings yet!</p>
        )}
        {!isLoading &&
          session &&
          bookings.length > 0 &&
          bookings.map((booking) => (
            <BookingItem
              key={booking.booking_id}
              booking={booking}
              onDelete={onDelete}
            />
          ))} */}
      </div>
    </div>
  );
};

export default DashboardContent;
