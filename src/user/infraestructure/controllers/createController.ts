import { CreateUser } from "../../application/create";

export class CreateUserController {
  constructor(private createUser: CreateUser) {}
  async run({ body, set }: { body: {email: string, password: string}, set: any}) {
    
    try {
      const user = await this.createUser.run(body.email, body.password);
      const { password, ...userWithoutPassword } = user;
      set.status = 201;
      return {
        data: {
          user: userWithoutPassword
        }
      }
    } catch (e: any) {
      if (e.code === "P2002") {
        set.status = 409;
        return {
          message: "Email already exists"
        }
      }
      set.status = 500;
      return {
        message: e.message
      }
    }
  }
}