"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { TBooking } from "../utils/types";
import Header from "../components/navigation/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/navigation/Footer";
import getUsersBookings from "../api/getUsersBookings";
import getUserIdFromEmail from "../api/getUserId";

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
        <div className="max-w-screen-2xl  px-4 overflow-auto">
          <h1>
            👋 Hello, {session?.user?.name}! Welcome to your profile dashboard!
          </h1>
          <div>
            <h1>Your bookings</h1>
            {bookings && bookings.map((b) => <p key={b.booking_id}>{b.guests_number}</p>)}
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
