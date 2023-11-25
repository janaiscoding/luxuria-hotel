import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const guestsNumber = searchParams.get('guests');
 
  try {
    if (!guestsNumber) throw new Error('Guest number is requires');
    await sql`INSERT INTO bookings (guests) VALUES (${guestsNumber});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const bookings = await sql`SELECT * FROM bookings;`;
  return NextResponse.json({ bookings }, { status: 200 });
}