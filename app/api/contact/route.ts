  import { NextResponse } from "next/server";
  import { Resend } from "resend";

  type ContactPayload = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    recaptchaToken?: string;
  };

  const RECAPTCHA_SECRET_KEY =
    process.env.RECAPTCHA_SECRET_KEY ||
    "6LfMTTAsAAAAABStRHz39dKnxjZg6c-hhn1FyuJa";

  async function verifyRecaptcha(token: string): Promise<boolean> {
    try {
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: RECAPTCHA_SECRET_KEY,
            response: token,
          }),
        }
      );

      const data = await response.json();
      
      // For reCAPTCHA v3, check success and score (if available)
      // Score ranges from 0.0 (bot) to 1.0 (human)
      // For Enterprise, score might not always be present, so we check success first
      if (data.success === true) {
        // If score is present, verify it's above threshold (0.5)
        if (data.score !== undefined) {
          return data.score >= 0.5;
        }
        // If no score (some Enterprise configurations), trust success flag
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return false;
    }
  }

  export async function POST(req: Request) {
    try {
      const body = (await req.json()) as ContactPayload;
      const { firstName, lastName, email, phone, message, recaptchaToken } =
        body || {};

      // Verify reCAPTCHA token
      // Allow development bypass for localhost testing
      const isDevelopment = process.env.NODE_ENV === "development";
      const isLocalhost = req.headers.get("host")?.includes("localhost") || 
                         req.headers.get("host")?.includes("127.0.0.1");

      if (!recaptchaToken) {
        return NextResponse.json(
          { success: false, message: "reCAPTCHA verification required." },
          { status: 400 }
        );
      }

      // Skip verification in development if using bypass token
      if (isDevelopment && isLocalhost && recaptchaToken === "development-bypass-token") {
        console.warn("⚠️  Development mode: Skipping reCAPTCHA verification");
      } else {
        const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
        if (!isValidRecaptcha) {
          return NextResponse.json(
            {
              success: false,
              message: "reCAPTCHA verification failed. Please try again.",
            },
            { status: 400 }
          );
        }
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
