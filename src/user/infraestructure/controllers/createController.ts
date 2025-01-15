import { CreateUser } from "../../application/create";

export class CreateUserController {
  constructor(private createUser: CreateUser) {}
  async run({ body, error }: { body: {email: string, password: string}, error: any}) {
    
    try {
      const user = await this.createUser.run(body.email, body.password);
      return error(201, {
        data: user
      })
    } catch (e: any) {
      if (e.code === "P2002") {
        return error(409, {
          message: "User already exists"
        })
      }
      return error(500, {
        message: e.message
      })
    }
  }
}