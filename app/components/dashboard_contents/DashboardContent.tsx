import deleteBooking from "@/app/api/deleteBooking";
import getBookings from "@/app/api/getBookings";
import { TBooking } from "@/app/utils/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Columns from "./Columns";
import BookingItem from "./BookingItem";

const DashboardContent = () => {
  const { data: session } = useSession();

  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);
  const [isLoading, setIsLoading] = useState(true);

  // Sorting bookings by given clause
  const [sortParam, setSortParam] = useState("asc-arrival");

  const fetchBookings = async () => {
    const userBookings = await getBookings(sortParam);
    setBookings(userBookings);
  };

  const onDelete = (id: number) => {
    deleteBooking(id, fetchBookings);
  };

  useEffect(() => {
    if (session) {
      // When first loading, fetch the bookings - by default asc-arrival
      fetchBookings();
      // Stop the loading effect
      setIsLoading(false);
    }
  }, [session?.user?.email, sortParam]);

  return (
    <div className="max-w-7xl md:w-1/2 self-center h-full px-4 py-10 overflow-auto self-center basis-full flex flex-col gap-2">
      <h1 className="text-xl w-full">
        👋 Hello, {session?.user?.name}! Here you can see your bookings
      </h1>
      <div className="flex flex-col">
        <Columns sortParam={sortParam} setSortParam={setSortParam} />
        {isLoading && <p>Loading your bookings... Please wait...</p>}
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
          ))}
      </div>
    </div>
  );
};

export default DashboardContent;
