import { Elysia } from "elysia";
import { createUserController } from "@/server/dependecies";
import { loginUserController } from "@/server/dependecies";
import { refreshTokenController } from "@/server/dependecies";
import { createUserDTO } from "./domain/userDTO";
import { jwt } from '@elysiajs/jwt'
export const userRouter = new Elysia({
  prefix: "/user"
})
  .use(jwt({
    name: "access",
    secret: process.env.JWT_SECRET_ACCESS as string,
    exp: '1h'
  }))
  .use(jwt({
    name: "refresh",
    secret: process.env.JWT_SECRET_REFRESH as string,
    exp: '30d'
  }))
  .post('/register', (ctx) => createUserController.run(ctx), createUserDTO)
  .post('/login', (ctx) => loginUserController.run(ctx), createUserDTO)
  .get('/refresh', (ctx) => refreshTokenController.run(ctx))
  .get('/', () => "Get all users")