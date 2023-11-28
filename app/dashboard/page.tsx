"use client";
import { useSession } from "next-auth/react";
import ProfileClient from "../components/navigation/ProfileClient";
import { useEffect, useState } from "react";
import { TBooking } from "../utils/types";

const Dashboard = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<TBooking[]>([] as TBooking[]);

  useEffect(() => {
    fetch(`/api/bookings`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col gap-1 bg-neutral-900 min-h-screen">
      <div className="max-w-screen-2xl m-auto px-4 text-slate-50 flex flex-col items-start">
        {session && <ProfileClient user={session?.user} />}
        <p>hello from dashboard - test for now</p>
        <p>
          Here will be the reservation dashboard probably where users can see
          their bookings and update/cancel them
        </p>
        <div>
          {bookings &&
            bookings.map((booking) => (
              <p key={booking.id}>{booking.guestsnumber} guests</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
