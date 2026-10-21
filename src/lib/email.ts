import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend() {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

/** @deprecated Prefer getResend() — kept for existing imports */
export const resend = {
  emails: {
    send: (...args: Parameters<Resend["emails"]["send"]>) => getResend().emails.send(...args),
  },
};
