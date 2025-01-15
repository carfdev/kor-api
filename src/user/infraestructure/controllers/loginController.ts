import { LoginUser } from "@/user/application/login";

export class LoginUserController {
  constructor(private loginUser: LoginUser) {}
  async run({ body, access, refresh, set, cookie: { auth } }: { body: {email: string, password: string}, access: any, refresh: any, set: any, cookie: any }) {
    try {
      const user = await this.loginUser.run(body.email, body.password);
      if (user instanceof Error) {
        if (user.message === "User not found") {
          set.status = 404;
          return {
            message: "User not found"
          }
        }
        if (user.message === "Invalid password") {
          set.status = 401;
          return {
            message: "Invalid password"
          }
        }
      } else{

      const { password, ...userWithoutPassword } = user;

        const access_token = await access.sign({
          id: user.id
        });

        const refresh_token = await refresh.sign({
          id: user.id
        });

        auth.set({
          value: refresh_token,
          httpOnly: true,
          maxAge: 30 * 86400,
          path: '/',
      })


        return {
          data: {
            token: access_token,
            user: userWithoutPassword,
            message: "Login successful"
          }
        }
      }
      
    } catch (e) {
      const error = e as Error;
      set.status = 500;
      return {
        message: error.message
      }
    }
  }
}