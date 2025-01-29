import { db } from "@/db";
import { Users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, picture } = await req.json();
    const user = await db.select().from(Users).where(eq(Users.email, email));
    if (user.length > 0) {
      return NextResponse.json({ status: 201 });
    }
    await db.insert(Users).values({
      name: name,
      email: email,
      picture: picture,
    });
    return NextResponse.json({ message: "dodano do bazy" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
