import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

/**
 * @api {get} api/bookings Get all bookings
 * @apiName getBookings
 * @apiGroup booking
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
 * @apiName Createbooking
 * @apiGroup booking
 *
 * @apiParam {Number} guests booking guest number.
 * @apiParam {String} arrival booking arrival date.
 * @apiParam {String} departure booking deparute date.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "message": "Your booking was created!"
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
  let userID = searchParams.get("userID");
  try {
    if (!guestsNumber || !arrivalDate || !departureDate || !userID)
      throw new Error("All fields are required.");
    else {
      // convert them to correct data type
      const arrDate = new Date(arrivalDate);
      const depDate = new Date(departureDate);
      //@ts-ignore
      await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES (${arrDate}, ${depDate}, ${guestsNumber}, ${userID});`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Your booking was created!" },
    { status: 201 }
  );
}

/**
 * @api {delete} api/bookings/?id=id Delete a booking, protected route serverside
 * @apiName deleteBooking
 * @apiGroup booking
 *
 * @apiParam {id} id booking_id to be deleted
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 202 ACCEPTED
 *     {
 *       "message": "The booking was successfully canceled."
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "The booking id was not provided."
 *    }
 */

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  let id = searchParams.get("id");
  const session = await getServerSession();
  // Not signed in
  if (!session) NextResponse.json({ status: 401 });
  // Is signed in
  else {
    try {
      if (!id) throw new Error("The booking id was not provided.");
      else {
        // Session user must match the booking user_id
        // this way we only get userID from auth session
        await sql`DELETE 
        FROM bookings 
        WHERE user_id = (SELECT user_id FROM users WHERE email = ${session.user?.email}) 
        AND bookings.booking_id=${id};`;

        return NextResponse.json(
          { message: "The booking was successfully canceled." },
          { status: 202 }
        );
      }
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const session = await getServerSession();
  if (session) {
    // Is signed in
    // Field names in booking form
    let guestsNumber = searchParams.get("guests");
    let arrivalDate = searchParams.get("arrival");
    let departureDate = searchParams.get("departure");
    let userID = searchParams.get("userID");
    try {
      if (!id) throw new Error("The booking id was not provided.");
      else {
        // Session user must match the booking user_id
        // this way we only get userID from auth session
        await sql`UPDATE bookings 
        SET guests_number=${guests}
        WHERE user_id = (SELECT user_id FROM users WHERE email = ${session.user?.email}) 
        AND bookings.booking_id=${id};`;

        return NextResponse.json(
          { message: "The booking was successfully canceled." },
          { status: 202 }
        );
      }
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  } else {
    // Not Signed in
    NextResponse.json({ status: 401 });
  }
}
