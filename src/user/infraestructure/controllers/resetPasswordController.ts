import { ResetPassword } from "@/user/application/resetPaswword";

export class ResetPasswordController {
  constructor(private resetPassword: ResetPassword) {}

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
      return {
        token
      }
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
      
    }

  }
}