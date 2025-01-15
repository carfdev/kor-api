import { t } from "elysia";

export const createUserDTO = {
  body: t.Object({
    email: t.String(),
    password: t.String()
  })
}