"use client"
import { sql } from "@vercel/postgres";
import { useSession } from "next-auth/react";

const Dashboard = async () => {
  // const { data: session } = useSession();
  // console.log(session);
  // const data = await sql`SELECT * FROM bookings;`;
  // console.log(data)
  return (
    <div>
      hello from dashboard - test for now
      {/* {rows.map((item) => (
        <p key={item.id}>
          {" "}
          Reservation number {item.id} : {item.guests} guests
        </p>
      ))} */}
    </div>
  );
};

export default Dashboard;
