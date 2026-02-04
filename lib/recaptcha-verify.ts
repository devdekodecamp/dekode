// Server-side reCAPTCHA verification utility

const RECAPTCHA_SECRET_KEY =
  process.env.RECAPTCHA_SECRET_KEY ||
  "6LfMTTAsAAAAABStRHz39dKnxjZg6c-hhn1FyuJa";

export async function verifyRecaptcha(token: string): Promise<boolean> {
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

/**
 * Verify reCAPTCHA token with development mode support
 * Returns true if verification passes or if in development with bypass token
 */
export async function verifyRecaptchaWithDevBypass(
  token: string,
  request?: Request
): Promise<boolean> {
  const isDevelopment = process.env.NODE_ENV === "development";
  const isLocalhost =
    request &&
    (request.headers.get("host")?.includes("localhost") ||
      request.headers.get("host")?.includes("127.0.0.1"));

  // Skip verification in development if using bypass token
  if (isDevelopment && isLocalhost && token === "development-bypass-token") {
    console.warn("⚠️  Development mode: Skipping reCAPTCHA verification");
    return true;
  }

  return verifyRecaptcha(token);
}







