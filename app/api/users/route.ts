import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

/**
 * @api {get} api/users Get all users
 * @apiName getUsers
 * @apiGroup users
 *
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        message: "All users were retrieved!",
 *        users: [] as User[];
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "An unexpected error has occured."
 *    }
 *
 */

export async function GET(request: Request) {
  const { rows: users } = await sql`SELECT name, email FROM users;`;
  if (users)
    return NextResponse.json(
      { message: "All users were retrieved!", users },
      { status: 200 }
    );

  return NextResponse.json(
    { error: "An unexpected error has occured." },
    { status: 500 }
  );
}

/**
 * @api {post} api/users Create a new user
 * @apiName createUser
 * @apiGroup users
 *
 * @apiParam {name} new user name string
 * @apiParam {email} new user email string
 * @apiParam {password} new user password string
 *
 * @apiSuccess Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *        message: "Your account was created successfully!",
 *     }
 *
 * @apiError Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "An unexpected error has occured."
 *    }
 *
 * @apiError Not unique email:
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": "An account with this email already exists."
 *    }
 */

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const name = searchParams.get("name");

  try {
    if (email && name && password) {
      // Make sure emails are unique. If there are any found, a 400 will be sent.
      const { rows: uniqueEmail } =
        await sql`SELECT email FROM users WHERE email=${email}`;
      if (uniqueEmail.length > 0)
        return NextResponse.json(
          {
            error: "An account with this email already exists.",
          },
          { status: 400 }
        );

      // Everything is valid, now I have to has the pw and create the user
      const hashed = await bcryptjs.hash(password, 10);
      if (hashed) {
        await sql`INSERT INTO users (name, email, password) VALUES ( ${name}, ${email}, ${hashed});`;
      }

      return NextResponse.json(
        { message: "Your account was created successfully!" },
        { status: 201 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error has occured.", err },
      { status: 500 }
    );
  }
}
