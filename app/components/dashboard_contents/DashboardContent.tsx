import deleteBooking from "@/app/api/deleteBooking";
import getBookings from "@/app/api/getBookings";
import { TBooking } from "@/app/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BookingItem from "./BookingItem";

const DashboardContent = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    const userBookings = await getBookings();
    setBookings(userBookings);
  };

  const onDelete = (id: number) => {
    deleteBooking(id);
    fetchBookings();
  };

  useEffect(() => {
    // When first loading, fetch the bookings
    fetchBookings();
    // Stop the loading effect
    setIsLoading(false);
  }, []);

  return (
    <div className="max-w-7xl md:w-1/2 self-center h-full px-4 py-10 overflow-auto self-center basis-full flex flex-col gap-2">
      <h1 className="text-xl w-full">
        👋 Hello, {session?.user?.name}! Here you can see your bookings
      </h1>
      <div className="flex flex-col">
        <div className="flex text-center bg-slate-400 text-slate-800">
          <p className="border border-slate-800 p-2 basis-full">Arriving</p>
          <p className="border border-slate-800 p-2 basis-full">Departure</p>
          <p className="border border-slate-800 p-2 basis-full">Guests</p>
          <p className="border border-slate-800 p-2 basis-full">Delete</p>
        </div>
        {isLoading && <p>Loading your bookings... Please wait...</p>}
        {!isLoading && bookings.length === 0 && (
          <p>You don't have any bookings yet!</p>
        )}
        {!isLoading &&
          bookings.length > 0 &&
          bookings.map((booking) => (
            <BookingItem
              key={booking.booking_id}
              booking={booking}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default DashboardContent;
