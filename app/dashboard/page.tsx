"use client";
import { sql } from "@vercel/postgres";
import { useSession } from "next-auth/react";
import ProfileClient from "../components/navigation/ProfileClient";
import Bookings from "../components/dashboard/Bookings";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-1 bg-neutral-900 min-h-screen">
      <div className="max-w-screen-2xl m-auto px-4 text-slate-50 flex flex-col items-start">
        {session && <ProfileClient user={session?.user} />}
        <p>hello from dashboard - test for now</p>
        <p>
          Here will be the reservation dashboard probably where users can see
          their bookings and update/cancel them
        </p>
        <Bookings />
      </div>
    </div>
  );
};

export default Dashboard;
