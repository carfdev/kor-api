import { Elysia } from "elysia";
import { createUserController, loginUserController, refreshTokenController, updatePasswordController, resetPasswordController } from "@/server/dependecies";
import { createUserDTO, loginUserDTO, refreshUserDTO, updatePasswordDTO, resetPasswordDTO } from "./domain/userDTO";
import { jwt } from '@elysiajs/jwt'
import { html } from "@elysiajs/html";

import { index} from "./infraestructure/index"
export const userRouter = new Elysia({
  prefix: "/user"
})
  .use(html())
  .use(jwt({
    name: "update",
    secret: process.env.JWT_SECRET_UPDATE as string,
    exp: '15m'
  }))
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
  // @ts-ignore
  .post('/register', (ctx) => createUserController.run(ctx), createUserDTO)
  // @ts-ignore
  .post('/login', (ctx) => loginUserController.run(ctx), loginUserDTO)
  // @ts-ignore
  .get('/refresh', (ctx) => refreshTokenController.run(ctx), refreshUserDTO)
  // @ts-ignore
  .patch('/update-password/:token', (ctx) => updatePasswordController.run(ctx), updatePasswordDTO)
  // @ts-ignore
  .post('/reset-password', (ctx) => resetPasswordController.run(ctx), resetPasswordDTO)
  .get('/reset-password/:token', (ctx) => index(ctx));