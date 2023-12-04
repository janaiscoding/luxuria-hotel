import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * @api {get} api/bookings Get bookings, associated with session
 * @apiName getBookings
 * @apiGroup booking
 *
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Fetched the session user's bookings!",
 *       "bookings": TBooking[]
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized. Please sign in.",
 *    }
 *
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "Database error message."
 *    }
 */
export async function GET(req: Request) {
  const session = await getServerSession();
  if (!session) {
    // Throw a please sign in notification
    return NextResponse.json(
      { error: "Unauthorized. Please sign in." },
      { status: 401 }
    );
  }
  // Get user ID from session.user.email
  const { rows } =
    await sql`SELECT user_id FROM users WHERE email=${session.user?.email}`;
  const userID = rows[0].user_id;
  try {
    const { rows: bookings } =
      await sql`SELECT arrival_date, booking_id, departure_date, guests_number FROM bookings WHERE user_id=${userID} ORDER BY arrival_date;`;

    return NextResponse.json(
      { message: "Fetched the session user's bookings!", bookings },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

/**
 * @api {post} api/bookings Create a new booking
 * @apiName createBooking
 * @apiGroup booking
 *
 * @apiParam {Number} guestsNumber - booking guest number.
 * @apiParam {String} arrivalDate  - booking arrival date.
 * @apiParam {String} departureDate - booking deparute date.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       "message": "Your booking was created!"
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": "Please complete all the fields."
 *    }
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized. Please sign in."
 *    }
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "Database error message."
 *    }
 */

export async function POST(req: Request) {
  // https://dev.to/iambstha/http-get-post-request-in-nextjs-stable-app-router-557m
  const { guestsNumber, arrivalDate, departureDate } = await req.json();
  if (!guestsNumber || !arrivalDate || !departureDate) {
    return NextResponse.json(
      { error: "Please complete all the fields." },
      { status: 400 }
    );
  }

  const session = await getServerSession();
  if (!session) {
    // Throw a please sign in notification
    return NextResponse.json(
      { error: "Unauthorized. Please sign in." },
      { status: 401 }
    );
  }

  // We know we're signed in now, so we get userID
  // Get user ID from session.user.email
  const { rows } =
    await sql`SELECT user_id FROM users WHERE email=${session.user?.email}`;
  const userID = rows[0].user_id;
  // And we convert dates to correct data type for storing in db
  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);
  console.log(arrival, departure, guestsNumber, userID)
  try {
    //@ts-ignore
    await sql`INSERT INTO bookings (arrival_date, departure_date, guests_number, user_id) VALUES (${arrival}, ${departure}, ${guestsNumber}, ${userID});`;
    return NextResponse.json(
      { message: "Your booking was created!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
