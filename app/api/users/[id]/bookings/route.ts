import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/users/:id/bookings Get a specified user's bookings
 * @apiGroup users
 *
 * @apiParam {id} id The user_id for users
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Get individual booking bookings!",
 *       "bookings": [] as TBooking[];
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "An unexpected error has occured."
 *    }
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { rows } = await sql`SELECT * FROM bookings WHERE user_id=${id};`;

  if (rows) {
    return NextResponse.json(
      {
        message: "Get individual user's bookings!",
        bookings: rows,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { error: "An unexpected error has occured." },
    { status: 500 }
  );
}
