import { ResetPassword } from "@/user/application/resetPaswword";
import type { IResend } from "@/services/interfaces/IResend";

export class ResetPasswordController {
  constructor(private resetPassword: ResetPassword, private email: IResend) {}

  async run({ body: { email }, set, update }: { body: { email: string }, set: any, update: any }) {
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
      await this.email.sent(email, "Reset password", `<a href="http://localhost:3000/reset-password/${token}">Reset password</a>`);
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