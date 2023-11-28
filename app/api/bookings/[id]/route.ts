import { sql } from "@vercel/postgres";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

/**
 * @api {get} api/bookings/:id Get a specified id booking
 * @apiGroup Bookings
 *
 * @apiParam {id} id The booking id.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Get individual booking information!",
 *       "booking": {id: number, arrivaldate: string, departuredate: string, guestsnumber: number}
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
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { rows } = await sql`SELECT * FROM bookings WHERE id=${id}`;

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
