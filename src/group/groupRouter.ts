import { Elysia } from "elysia";
import controllers from "@/group/infraestructure/groupDependecies";
import { createGroupDTO } from "./domain/groupDTO";
import { jwt } from '@elysiajs/jwt'

const {
  createGroupController
} = controllers

export const groupRouter = new Elysia({
  prefix: "/group"
})
  .use(jwt({
    name: "access",