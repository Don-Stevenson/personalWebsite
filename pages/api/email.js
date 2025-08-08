// pages/api/email.js
import { Resend } from "resend"
import EmailTemplate from "../../emails/ContactEmail" // React component

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, message } = req.body

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's verified domain for testing
      to: process.env.MY_EMAIL,
      subject: `Portfolio contact from ${name}`,
      react: EmailTemplate({ name, email, message }), // React component!
    })

    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(200).json({ success: true, data })
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email" })
  }
}
