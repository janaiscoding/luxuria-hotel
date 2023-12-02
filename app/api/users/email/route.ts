import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/users/email/?email=email Get a specified user_id from a provided email
 * @apiGroup users
 *
 * @apiParam {email} email User's unique email.
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
 *      "error": "This user does not exist."
 *    }
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email)
    return NextResponse.json(
      { error: "No email was provided" },
      { status: 500 }
    );
  else {
    const { rows } = await sql`SELECT user_id FROM users WHERE email=${email};`;

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
}
