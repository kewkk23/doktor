import Stripe from "stripe";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { Consultation, Users } from "@/db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});
const endpointSecret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    console.log(req.headers);

    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json(
        { error: "Brak nagłówka stripe-signature" },
        { status: 400 }
      );
    }

    const rawBody = await req.arrayBuffer();

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        Buffer.from(rawBody),
        sig,
        endpointSecret
      );
    } catch (err) {
      console.error("Błąd weryfikacji webhooka:", err);
      return NextResponse.json(
        { error: "Błąd weryfikacji webhooka" },
        { status: 400 }
      );
    }

    console.log("Event type:", event?.type);

    if (event?.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Sesja checkout:", JSON.stringify(session, null, 2));

      const sessionId = session.id;
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
      const productName = lineItems.data[0]?.description || "Brak";

      let email = session.customer_email as string;

      if (!email) {
        email = session.customer_details?.email || "";
      }

      if (!email || email == "") {
        console.error("Brak emaila w evencie i w danych klienta");
        return NextResponse.json({ error: "Brak emaila" }, { status: 400 });
      }

      const user = await db
        .select({ name: Users.name })
        .from(Users)
        .where(eq(Users.email, email));

      if (!user.length) {
        console.error("Użytkownik nie znaleziony");
        return NextResponse.json(
          { error: "Użytkownik nie znaleziony" },
          { status: 404 }
        );
      }

      await db.insert(Consultation).values({
        name: user[0].name,
        product_name: productName,
        email: email,
        pay_id: session.payment_intent as string,
      });

      console.log("Dodano konsultację:", user[0].name);
    }

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    console.error("Błąd serwera:", err);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
