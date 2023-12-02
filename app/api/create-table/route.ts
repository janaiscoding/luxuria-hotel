import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// @route: api/create-bookings-table
export async function GET(request: Request) {
  try {
    //can add username VARCHAR(100), from userId relation
    // await sql`CREATE TABLE bookings (
    //   booking_id SERIAL PRIMARY KEY,
    //   arrival_date DATE,
    //   departure_date DATE,
    //   guests_number INTEGER,
    //   user_id SERIAL REFERENCES users (user_id)   
    //   );`;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "The bookings table was created" },
    { status: 200 }
  );
}

// CREATE TABLE users (
//   user_id SERIAL PRIMARY KEY NOT NULL,
//   email TEXT NOT NULL UNIQUE,
//   password TEXT NOT NULL,
//   name VARCHAR(25) NOT NULL,
 
//   )
