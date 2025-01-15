import { Elysia } from "elysia";
import { userRouter } from "@/user/userRouter";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia()
    this.app.group('/api/v1', (app) => 
      app.use(userRouter)
    )
  }

  public start() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(
        `🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`
      );
    });
  }
}