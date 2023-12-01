import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/bookings/:user_id Get a specified bookings that are for one user.
 * @apiGroup bookings
 *
 * @apiParam {user_id} user_id The user id for which we retrieve bookings for.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Get individual booking information!",
 *       "bookings": {id: number, arrivaldate: string, departuredate: string, guestsnumber: number}
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "This booking does not exist."
 *    }
 */

export async function GET(
  req: Request,
  { params }: { params: { user_id: string } }
) {
  const { user_id } = params;
  const { rows } = await sql`SELECT * FROM bookings WHERE user_id=${user_id}`;
  console.log(rows)
  if (rows[0]) {
    return NextResponse.json(
      {
        message: "Get individual booking information!",
        booking: rows[0],
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { error: "This booking does not exist." },
    { status: 404 }
  );
}
