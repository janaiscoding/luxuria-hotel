import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// @route api/get-all-bookings
export async function GET(request: Request) {
  try {
    const bookings = await sql`SELECT * FROM bookings;`;
    return NextResponse.json({ bookings: bookings.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
