import { sql } from "@vercel/postgres";

const Dashboard = async () => {
  const { rows } = await sql`SELECT * from bookings;`;

  return (
    <div>
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
