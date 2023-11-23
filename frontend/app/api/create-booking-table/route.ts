import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// endpoint: api/create-booking-table
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE bookings(id SERIAL PRIMARY KEY, arrival TIMESTAMP, departure TIMESTAMP, guests INTEGER);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
