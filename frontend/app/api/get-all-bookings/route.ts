import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// api/get-all-bookings
export async function GET() {
  try {
    const result = await sql`SELECT * FROM bookings;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
