import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// api/add-booking/?arrival=date&departure=date&guests=number
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const arrival = searchParams.get("arrival");
  const departure = searchParams.get("departure");
  const guests = searchParams.get("guests");

  try {
    if (!arrival || !departure || !guests)
      throw new Error(
        "Data required: arrival date, departure date, number of guests"
      );
    await sql`INSERT INTO bookings (id, arrival, departure, guests) VALUES (1,${arrival}, ${departure}, ${guests});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const bookings = await sql`SELECT * FROM bookings;`;
  return NextResponse.json({ bookings }, { status: 200 });
}
