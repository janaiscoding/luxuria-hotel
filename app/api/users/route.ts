import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcryptjs, { hash } from "bcryptjs";

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
  const { searchParams } = new URL(request.url);
  // logic to create a new user

  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const name = searchParams.get("name");
  console.log("calling api", email, password, name);

  try {
    if (email && name && password) {
      const hashed = await bcryptjs.hash(password, 10);
      const { rows: uniqueEmail } =
        await sql`SELECT email FROM users WHERE email=${email}`;
      if (uniqueEmail.length > 0)
        return NextResponse.json(
          {
            error: "An account with this email already exists.",
          },
          { status: 400 }
        );
      if (hashed) {
        // await sql`INSERT INTO users (name, email, password) VALUES (${email}, ${password});`;
      }
      console.log(uniqueEmail);
    }
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
// console.log(name, email, password);
// // check if email is unique
// const emailunique =
//   await sql`SELECT email FROM users WHERE email=${email}}`;
// console.log(emailunique);
// // must hash pw b4 storing to db
// const hashedPw = `bcrypt code here`;
// // db model userid email pw name
// //   try {

// //     //emails must be unique
// //     await sql`INSERT INTO users (email, password, name) VALUES (${email} ${hashedPw} ${name})`;
// //   }
// //   catch {

// //   }
