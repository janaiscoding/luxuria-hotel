import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {post} api/create-booking Create a new booking
 * @apiName CreateBooking
 * @apiGroup Booking
 *
 * @apiParam {Number} guests Booking guest number.
 * @apiParam {String} arrival Booking arrival date.
 * @apiParam {String} departure Booking deparute date.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        message: "All bookings were retrieved!",
 *        bookings: [] as {id: number, arrivaldate: string, departuredate: string, guestsnumber: number}[];
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "An unexpected database error has occured."
 *    }
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const { rows } = await sql`SELECT * FROM bookings;`;
  if (rows) {
    return NextResponse.json(
      { message: "All bookings were retrieved!", bookings: rows },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { error: "An unexpected database error has occured." },
    { status: 500 }
  );
}

/**
 * @api {post} api/bookings Create a new booking
 * @apiName CreateBooking
 * @apiGroup Booking
 *
 * @apiParam {Number} guests Booking guest number.
 * @apiParam {String} arrival Booking arrival date.
 * @apiParam {String} departure Booking deparute date.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "message": "Your reservation was created!"
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "Database error."
 *    }
 */
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
    { message: "Your reservation was created!" },
    { status: 201 }
  );
}
