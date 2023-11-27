import { sql } from "@vercel/postgres";
import { useEffect } from "react";

const Bookings =  async () => {
//   useEffect(() => {
//     fetch("/api/get-all-bookings", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
let data

try {
    data = await sql`SELECT * FROM users`
  } catch (e: any) {
    throw e
  }
  return (
    <div>
      hello bookings
      {/* {rows.map((item) => (
        <p key={item.id}>
          {" "}
          Reservation number {item.id} : {item.guests} guests
        </p>
      ))} */}
    </div>
  );
};

export default Bookings;
