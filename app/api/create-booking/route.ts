import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// @route api/create-booking
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  // Field names in booking form
  let guestsNumber = searchParams.get("guests");
  let arrivalDate = searchParams.get("arrival");
  let departureDate = searchParams.get("departure");

  try {
    if (!guestsNumber || !arrivalDate || !departureDate)
      throw new Error("All fields are required.");
    else {
      // convert them to correct data type
      const arrDate = new Date(arrivalDate);
      const depDate = new Date(departureDate);
      //@ts-ignore
      await sql`INSERT INTO bookings (arrivalDate, departureDate, guestsNumber) VALUES (${arrDate}, ${depDate}, ${guestsNumber});`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json(
    { message: "We received your reservation!" },
    { status: 201 }
  );
}
