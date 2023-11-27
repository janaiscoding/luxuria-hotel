"use client";
import { sql } from "@vercel/postgres";

const Dashboard = async () => {
  const { rows } = await sql`SELECT * from bookings;`;

  console.log(rows);
  return (
    <div>
      hello from dashboard - test for now
      {rows.map((item) => (
        <p key={item.id}>
          {" "}
          Reservation number {item.id} : {item.guests} guests
        </p>
      ))}
    </div>
  );
};

export default Dashboard;
