import { LoginUser } from "@/user/application/login";

export class LoginUserController {
  constructor(private loginUser: LoginUser) {}
  async run({ body, error }: { body: {email: string, password: string}, error: any}) {
    try {
      const user = await this.loginUser.run(body.email, body.password);
      if (user instanceof Error) {
        if (user.message === "User not found") {
          return error(404, {
            message: "User not found"
          })
        }
        if (user.message === "Invalid password") {
          return error(401, {
            message: "Invalid password"
          })
        }
      } else{

      const { password, ...userWithoutPassword } = user;

        return {
          data: {
            user: userWithoutPassword,
            message: "Login successful"
          }
        }
      }
      
    } catch (e) {
      const err = e as Error;

      return error(500, {
        message: err.message
      })
    }
  }
}