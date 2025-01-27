import { ResetPassword } from "@/user/application/resetPaswword";
import type { IResend } from "@/services/interfaces/IResend";
import { resetPasswordEmail } from "./resetPasswordEmail";

export class ResetPasswordController {
  constructor(private resetPassword: ResetPassword, private email: IResend) {}

  async run({ body: { email }, set, update, url }: { body: { email: string }, set: any, update: any, url: string }) {
    try {
      const user = await this.resetPassword.run(email);
      if (!user) {
        set.status = 400;
        return {
          message: "User not found"
        }
      }
      const token = await update.sign({ id: user.id });

      set.value = 200;
      await this.email.sent(email, "Cambio de contraseña", resetPasswordEmail(url, email, token));
      return {
        message: "Email sent"
      }
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
      
    }

  }
}