import { UpdatePassword } from "@/user/application/updatePassword";

export class UpdatePasswordController {
  constructor(private updatePassword: UpdatePassword) {}
  async run({ body: { password }, params: { token }, set, update }: { body: { password: string }, params: { token: string }, set: any, update: any }) {
    try {
      const { id } = await update.verify(token); 
      if (!id) {
        set.status = 401;
        return {
          message: "Invalid token"
        }
      }
      await this.updatePassword.run(id, password);
      set.status = 200;
      return {
        message: "Password updated"
      }
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
    }
  }
}