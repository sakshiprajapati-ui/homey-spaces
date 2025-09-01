// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node.js runtime (needed for SDKs)

const BodySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required").max(5000),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = BodySchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // --- Option A: send email via Resend ---
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM || "Contact <noreply@yourdomain.com>",
      to: (process.env.RESEND_TO || "you@yourdomain.com").split(","),
      subject: `New contact from ${name}`,
      replyTo: email, // so you can reply directly
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // If you also want to write to DB, do it here (see Step 6).

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
