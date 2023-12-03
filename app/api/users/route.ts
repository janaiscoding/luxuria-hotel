import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
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

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  console.log(name, email, password);
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 404 }
    );
  }

  // Checks for valid, unique email
  const { rows: uniqueEmail } =
    await sql`SELECT email FROM users WHERE email=${email}`;
  if (uniqueEmail.length > 0) {
    return NextResponse.json(
      { error: "An account with this email already exists." },
      { status: 500 }
    );
  }
  // Everything is ok, can create new account
  try {
    // Hash password for storing in db
    const hashed = await bcryptjs.hash(password, 10);
    await sql`INSERT INTO users (name, email, password) VALUES ( ${name}, ${email}, ${hashed});`;
    return NextResponse.json(
      { message: "Your account was created successfully!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error has occured.", err },
      { status: 500 }
    );
  }
}
