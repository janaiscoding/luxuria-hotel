import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES 
    ('2023-12-12T22:00:00.000Z', '2023-12-12T22:00:00.000Z', 2, 5);`;
    await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES 
    ('2023-12-15T22:00:00.000Z', '2023-12-12T22:00:00.000Z', 2, 5);`;
    await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES 
    ('2023-12-14T22:00:00.000Z', '2023-12-12T22:00:00.000Z', 2, 5);`;
    await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES 
    ('2023-12-13T22:00:00.000Z', '2023-12-12T22:00:00.000Z', 2, 5);`;
    return NextResponse.json(
      { message: "Populated successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Errors", err }, { status: 500 });
  }
}
