import type { IResend } from "./interfaces/IResend";
import { Resend } from "resend";

const API_KEY = process.env.RESEND_EMAIL_SECRET;
if (!API_KEY) {
  console.log("RESEND_EMAIL_SECRET is missing");
}
const resend = new Resend(API_KEY);
export class Email implements IResend {
  
  async sent(email: string, subject: string, html: string) {
    const { error } = await resend.emails.send({
      from: "Kor <noreply@webiz.se>",
      to: email,
      subject: subject,
      html: html,
    });
    if (error) {
      throw new Error(error.message);
    }
  }
}