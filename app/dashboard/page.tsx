"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TBooking } from "../utils/types";
import Header from "../components/navigation/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/navigation/Footer";
import getUsersBookings from "../api/getUsersBookings";
import getUserIdFromEmail from "../api/getUserId";
import BookingItem from "../components/booking_item/BookingItem";
import deleteBooking from "../api/deleteBooking";

const Dashboard = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);
  const [userID, setUserID] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    const userID = await getUserIdFromEmail(session!.user!.email!);
    if (userID) {
      setUserID(userID);
      getUsersBookings(userID, setBookings);
      setIsLoading(false);
    }
  };

  const onDelete = (id: number) => {
    deleteBooking(id);
  };
  useEffect(() => {
    if (session && session.user) {
      // Only performing fetch when the user is loaded.
      fetchBookings();
    }
  }, [session?.user]);

  return (
    <div className=" min-h-screen font-lora">
      <div className="flex flex-col min-h-screen justify-between">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="max-w-7xl md:w-1/2 self-center h-full px-4 py-10 overflow-auto self-center basis-full flex flex-col gap-2">
            <h1 className="text-2xl">
              👋 Hello, {session?.user?.name}! Here you can see your bookings
            </h1>
            <div className="flex flex-col">
              <div className="flex text-center bg-slate-400 text-slate-800">
                <p className="border border-slate-800 p-2 basis-full">
                  Arriving
                </p>
                <p className="border border-slate-800 p-2 basis-full">
                  Departure
                </p>
                <p className="border border-slate-800 p-2 basis-full">Guests</p>
                <p className="border border-slate-800 p-2 basis-full">Delete</p>
              </div>
              {isLoading && <p>Loading your bookings... Please wait...</p>}
              {!isLoading &&
                bookings &&
                bookings.map((booking) => (
                  <BookingItem
                    key={booking.booking_id}
                    booking={booking}
                    sessionUser={userID}
                    onDelete={onDelete}
                  />
                ))}
              {!isLoading && !bookings && (
                <p>You don't have any bookings yet!</p>
              )}
            </div>
          </div>
        </div>
        <div className="justify-end">
          <Footer />
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Dashboard;
