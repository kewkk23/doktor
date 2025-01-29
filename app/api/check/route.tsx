import { db } from "@/db";
import { Consultation } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, product } = await req.json();
  const user = await db
    .select()
    .from(Consultation)
    .where(
      sql`${Consultation.name} = ${name} and ${Consultation.email} = ${email} and ${Consultation.product_name} = ${product}`
    );
  let index;
  if (user.length > 0) {
    index = user[0];
  } else if (user.length == 0) {
    index = user;
  } else {
    return NextResponse.json({ error: "Bląd" }, { status: 400 });
  }
  return NextResponse.json({ message: index }, { status: 200 });
}
