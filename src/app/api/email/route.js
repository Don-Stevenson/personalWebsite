// app/api/email/route.js
import { Resend } from "resend"
import EmailTemplate from "../../../../emails/ContactEmail" // React component
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.MY_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's verified domain for testing
      to: process.env.MY_EMAIL,
      subject: `Portfolio contact from ${name}`,
      react: EmailTemplate({ name, email, message }), // React component!
    })

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    )
  }
}
