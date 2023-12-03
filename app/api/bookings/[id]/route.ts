import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * @api {delete} api/bookings/:id Delete a booking, protected route server-side
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
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Unauthorized. Please sign in."
 *    }
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "An unexpected error has occured.", 
 *      "err"
 *    }
 */

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  const session = await getServerSession();
  // Not signed in
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in." },
      { status: 401 }
    );
  }
  // Is signed in
  // Get the user ID based of the session
  const { rows } =
    await sql`SELECT user_id FROM users WHERE email = ${session.user?.email};`;
  const userID = rows[0].user_id;
  try {
    // DELETE the record where the session user ID matches the booking_id and user_id for that specific booking
    await sql`DELETE 
        FROM bookings 
        WHERE user_id=${userID}
        AND booking_id=${id};`;
    return NextResponse.json(
      { message: "The booking was successfully canceled." },
      { status: 202 }
    );
  } catch (err) {
    return NextResponse.json({ error: "An unexpected error has occured.", err }, { status: 500 });
  }
}

// /**
//  * @api {get} api/bookings/:user_id Get a specified bookings that are for one user.
//  * @apiGroup bookings
//  *
//  * @apiParam {user_id} user_id The user id for which we retrieve bookings for.
//  *
//  * @apiSuccess Success-Response:
//  *     HTTP/1.1 200 OK
//  *     {
//  *       "message": "Get individual booking information!",
//  *       "bookings": {id: number, arrivaldate: string, departuredate: string, guestsnumber: number}
//  *     }
//  *
//  * @apiError Error-Response:
//  *    HTTP/1.1 404 Not Found
//  *    {
//  *      "error": "This booking does not exist."
//  *    }
//  */

// export async function GET(
//   req: Request,
//   { params }: { params: { user_id: string } }
// ) {
//   const { user_id } = params;
//   const { rows } = await sql`SELECT * FROM bookings WHERE user_id=${user_id}`;

//   if (rows[0]) {
//     return NextResponse.json(
//       {
//         message: "Get individual booking information!",
//         booking: rows[0],
//       },
//       { status: 200 }
//     );
//   }
//   return NextResponse.json(
//     { error: "This booking does not exist." },
//     { status: 404 }
//   );
// }
