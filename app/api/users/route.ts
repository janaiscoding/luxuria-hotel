import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const { rows } = await sql`SELECT * FROM users;`;
  if (rows)
    return NextResponse.json(
      { message: "All users were retrieved!", users: rows },
      { status: 200 }
    );

  return NextResponse.json(
    { error: "An unexpected database error has occured." },
    { status: 500 }
  );
}

export async function POST(request: Request) {
  // logic to create a new user
  console.log("calling api");
  const email = "myemail@mail.com";
  const password = "mypw";
  try {
    // await sql`INSERT INTO users (email, password) VALUES (${email}, ${password});`;
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected database error has occured." },
      { status: 500 }
    );
  }
  const { rows } = await sql`SELECT * FROM users;`;
  return NextResponse.json(
    { message: "New user created", users: rows },
    { status: 201 }
  );
}
