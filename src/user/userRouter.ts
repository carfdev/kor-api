import { Elysia } from "elysia";
import { createUserController } from "@/server/dependecies";
import { loginUserController } from "@/server/dependecies";
import { createUserDTO } from "./domain/userDTO";

export const userRouter = new Elysia({prefix: "/user"})
  .post('/register', createUserController.run.bind(createUserController), createUserDTO)
  .post('/login', loginUserController.run.bind(loginUserController), createUserDTO)
  .get('/', () => "Get all users")