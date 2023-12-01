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

const Dashboard = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);

  const fetchBookings = async () => {
    const userID = await getUserIdFromEmail(session!.user!.email!);
    if (userID) {
      getUsersBookings(userID, setBookings);
    }
  };

  useEffect(() => {
    if (session && session.user) {
      // Only performing fetch when the user is loaded.
      fetchBookings();
    }
  }, [session?.user]);

  return (
    <main className=" min-h-screen ">
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <div className="max-w-7xl w-full h-full px-4 overflow-auto py-10 basis-full">
          <h1 className="text-2xl">
            👋 Hello, {session?.user?.name}! Welcome to your profile dashboard!
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-orange-800 font-bold">Your bookings</h1>
            {bookings &&
              bookings.map((booking) => (
                <BookingItem key={booking.booking_id} booking={booking} />
              ))}
          </div>
        </div>
        <div className="justify-end">
          <Footer />
        </div>
      </div>

      <Toaster />
    </main>
  );
};

export default Dashboard;
