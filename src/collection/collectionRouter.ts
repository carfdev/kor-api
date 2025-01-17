import { Elysia } from "elysia";
import { createCollectionController } from "@/server/dependecies";
import { createCollectionDTO } from "./domain/collectionDTO";
import { jwt } from '@elysiajs/jwt'

export const collectionRouter = new Elysia({
  prefix: "/collection"
})
  .use(jwt({
    name: "access",
    secret: process.env.JWT_SECRET_ACCESS as string,
    exp: '1h'
  }))
  .post('/', (ctx) => createCollectionController.run(ctx), createCollectionDTO)