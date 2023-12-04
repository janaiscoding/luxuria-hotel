import { QueryResult, QueryResultRow, sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * @api {get} api/bookings Get bookings, associated with session
 * @apiName getBookings
 * @apiGroup booking
 *
 * @apiParam {sort_by} sortBy - sorter search param.
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

  // Get sorting filter from searchparams
  const { searchParams } = new URL(req.url);
  const sortBy = searchParams.get("sort_by")!;

  try {
    const { rows: bookings } = await getMyOrderedQuery(userID, sortBy);
    return NextResponse.json(
      {
        message: "Fetched the session user's bookings!",
        bookings,
      },
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

// Unfortunately, I couldn't find a work-around for this.
// It looks ugly but I had to do it because using a template literal for ORDER BY ex: ORDER BY ${sorterClause}
// wasn't recognized. I tried key/value pairs at first for this but I had to write the entire thing.
const getMyOrderedQuery = async (userID: number, sortBy: string) => {
  // const sorterMap = {
  //   "asc-arrival": "arrival_date",
  //   "desc-arrival": "arrival_date DESC",
  //   "asc-departure": "departure_date",
  //   "desc-departure": "departure_date DESC",
  //   "asc-guests-number": "guests_number",
  //   "desc-guests-number": "guests_number DESC",
  // };

  // let sorterClause =
  //   sorterMap[sortBy as keyof typeof sorterMap] || "arrival_date";

  let query!: Promise<QueryResult<QueryResultRow>>;

  switch (sortBy) {
    case "asc-arrival":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY arrival_date;`;
      break;
    case "desc-arrival":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY arrival_date DESC;`;
      break;
    case "asc-departure":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY departure_date;`;
      break;
    case "desc-departure":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY departure_date DESC;`;
      break;
    case "asc-guests-number":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY guests_number;`;
      break;
    case "desc-guests-number":
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID} 
        ORDER BY guests_number DESC;`;
      break;
    default:
      // Handle the case when sortBy is not recognized
      query = sql`SELECT 
        arrival_date, booking_id, departure_date, guests_number 
        FROM bookings 
        WHERE user_id=${userID}
        ORDER BY arrival_date;`;
      break;
  }
  return query;
};
