import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

/**
 * @api {get} api/users/:id Get a specified user information
 * @apiGroup users
 *
 * @apiParam {id} id The user_id for users
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Get individual user information!",
 *       "user": {user_id: number, name:string, email: string}
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
  const { rows } =
    await sql`SELECT user_id, name, email FROM users WHERE user_id=${id}`;

  if (rows[0]) {
    return NextResponse.json(
      {
        message: "Get individual user information!",
        user: rows[0],
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { error: "This user does not exist." },
    { status: 404 }
  );
}
