import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/bookings/:id Get a specified id booking
 * @apiGroup bookings
 *
 * @apiParam {id} id The booking id.
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Get a specific user id",
 *       "userID": {user_id: number}
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
  const { rows } =
    await sql`SELECT user_id FROM users WHERE user_id=${user_id}`;

  if (rows[0]) {
    return NextResponse.json(
      {
        message: "Get a specific user id",
        userID: rows[0],
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { error: "This user does not exist." },
    { status: 404 }
  );
}
