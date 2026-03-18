import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "adibRoumani.com <onboarding@resend.dev>",
      to: "adib.roumani@gmail.com",
      replyTo: email,
      subject: `Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
