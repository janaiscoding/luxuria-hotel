import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const { rows } =
    await sql`SELECT user_id, name, email FROM users WHERE email=${email};`;
    console.log(rows)
  if (rows)
    return NextResponse.json(
      { message: "All users were retrieved!" },
      { status: 200 }
    );

  return NextResponse.json(
    { error: "An unexpected error has occured." },
    { status: 500 }
  );
}
