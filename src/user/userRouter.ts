import { Elysia, t } from "elysia";
import { createUserController } from "@/server/dependecies";

export const userRouter = new Elysia({prefix: "/user"})
  .post('/', createUserController.run.bind(createUserController), {
    body: t.Object({
      email: t.String(),
      password: t.String()
    })
  })
  .get('/', () => "Get all users")