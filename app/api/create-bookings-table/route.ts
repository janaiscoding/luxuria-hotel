import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// @route: api/create-bookings-table
export async function GET(request: Request) {
  try {
    //can add username VARCHAR(100), from userId relation
    await sql`CREATE TABLE bookings (
        id SERIAL PRIMARY KEY,
        arrivalDate DATE,
        departureDate DATE,
        guestsNumber INTEGER                
        );`;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "The bookings table was created" },
    { status: 200 }
  );
}
