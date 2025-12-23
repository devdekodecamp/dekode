  import { NextResponse } from "next/server";
  import { Resend } from "resend";
  import { verifyRecaptchaWithDevBypass } from "@/lib/recaptcha-verify";

  type ContactPayload = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    recaptchaToken?: string;
  };

  export async function POST(req: Request) {
    try {
      const body = (await req.json()) as ContactPayload;
      const { firstName, lastName, email, phone, message, recaptchaToken } =
        body || {};

      // Verify reCAPTCHA token
      if (!recaptchaToken) {
        return NextResponse.json(
          { success: false, message: "reCAPTCHA verification required." },
          { status: 400 }
        );
      }

      const isValidRecaptcha = await verifyRecaptchaWithDevBypass(
        recaptchaToken,
        req
      );
      if (!isValidRecaptcha) {
        return NextResponse.json(
          {
            success: false,
            message: "reCAPTCHA verification failed. Please try again.",
          },
          { status: 400 }
        );
      }

      // Basic validations
      if (!firstName || !lastName || !email) {
        return NextResponse.json(
          { success: false, message: "Missing required fields." },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, message: "Invalid email address." },
          { status: 400 }
        );
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        return NextResponse.json(
          { success: false, message: "Email service not configured." },
          { status: 500 }
        );
      }

      const resend = new Resend(resendApiKey);

      const fullName = `${lastName}, ${firstName}`;
      const html = `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5;">
          <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
          <p style="margin:0 0 12px;"><strong>Name:</strong> ${fullName}</p>
          <p style="margin:0 0 12px;"><strong>Email:</strong> ${email}</p>
          ${
            phone
              ? `<p style="margin:0 0 12px;"><strong>Phone:</strong> ${phone}</p>`
              : ""
          }
          <p style="margin:16px 0 8px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${(message || "")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</p>
        </div>
      `;

      const { error } = await resend.emails.send({
        // Use a verified domain if available; fallback to Resend sandbox address
        from: "DeKode Camp <onboarding@resend.dev>",
        to: ["hello@dekodecamp.com"],
        replyTo: email,
        subject: `Contact Form: ${fullName}`,
        html,
      });

      if (error) {
        return NextResponse.json(
          { success: false, message: "Failed to send email." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "Unexpected error." },
        { status: 500 }
      );
    }
  }
