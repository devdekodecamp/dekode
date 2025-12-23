// Shared reCAPTCHA utilities

export const RECAPTCHA_SITE_KEY = "6LfMTTAsAAAAACG7wkRkriaB9TPRlg5McqXZoR3X";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

/**
 * Get a reCAPTCHA token for form submission
 * Handles development mode bypass for localhost
 */
export async function getRecaptchaToken(
  action: string = "submit"
): Promise<string> {
  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // In development, try to get token but allow bypass if not configured
  if (isDevelopment) {
    try {
      if (window.grecaptcha && window.grecaptcha.enterprise) {
        return await new Promise<string>((resolve) => {
          window.grecaptcha.enterprise.ready(async () => {
            try {
              const token = await window.grecaptcha.enterprise.execute(
                RECAPTCHA_SITE_KEY,
                { action }
              );
              resolve(token);
            } catch (err) {
              console.warn(
                "reCAPTCHA not configured for localhost. Using development bypass."
              );
              resolve("development-bypass-token");
            }
          });
        });
      } else {
        return "development-bypass-token";
      }
    } catch (err) {
      console.warn("reCAPTCHA error in development:", err);
      return "development-bypass-token";
    }
  }

  // Production: require valid reCAPTCHA token
  if (!window.grecaptcha || !window.grecaptcha.enterprise) {
    throw new Error("reCAPTCHA not loaded. Please refresh the page.");
  }

  return await new Promise<string>((resolve, reject) => {
    window.grecaptcha.enterprise.ready(async () => {
      try {
        const token = await window.grecaptcha.enterprise.execute(
          RECAPTCHA_SITE_KEY,
          { action }
        );
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  });
}


