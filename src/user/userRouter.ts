import { Elysia } from "elysia";

export const userRouter = new Elysia({prefix: "/user"})
  .post('/', () => "Create a user")
  .get('/', () => "Get all users")