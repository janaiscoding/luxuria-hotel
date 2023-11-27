import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/get-all-bookings Retrieve all bookings information
 * @apiName GetAllBookings
 * @apiGroup Booking
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "bookings": [
 * 
 *        ],
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "Database error."
 *    }
 */

export async function GET(request: Request) {
  try {
    const bookings = await sql`SELECT * FROM bookings;`;
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
