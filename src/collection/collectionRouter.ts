import { Elysia } from "elysia";
import controllers from "@/collection/infraestructure/collectionDependecies";
import { createCollectionDTO, getCollectionDTO, getAllCollectionDTO, updateCollectionDTO, deleteCollectionDTO } from "./domain/collectionDTO";
import { jwt } from '@elysiajs/jwt'

const {
  createCollectionController,
  getAllCollectionController,
  getCollectionController,
  updateCollectionController,
  deleteCollectionController
} = controllers

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
    // @ts-ignore
  .patch('/:id', (ctx) => updateCollectionController.run(ctx), updateCollectionDTO)
    // @ts-ignore
  .delete('/:id', (ctx) => deleteCollectionController.run(ctx), deleteCollectionDTO)