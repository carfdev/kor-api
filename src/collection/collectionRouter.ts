import { Elysia } from "elysia";
import { createCollectionController } from "@/server/dependecies";
import { getAllCollectionController } from "@/server/dependecies";
import { createCollectionDTO, getCollectionDTO, getAllCollectionDTO } from "./domain/collectionDTO";
import { getCollectionController } from "@/server/dependecies"; 
import { jwt } from '@elysiajs/jwt'

export const collectionRouter = new Elysia({
  prefix: "/collection"
})
  .use(jwt({
    name: "access",
    secret: process.env.JWT_SECRET_ACCESS as string,
    exp: '1h'
  }))
    // @ts-ignore
  .post('/', (ctx) => createCollectionController.run(ctx), createCollectionDTO)
    // @ts-ignore
  .get('/', (ctx) => getAllCollectionController.run(ctx), getAllCollectionDTO)
    // @ts-ignore
  .get('/:id', (ctx) => getCollectionController.run(ctx), getCollectionDTO)