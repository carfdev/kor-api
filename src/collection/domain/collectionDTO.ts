import { t } from "elysia";

export const createCollectionDTO = {
  body: t.Object({
    name: t.String(),
    description: t.Optional(t.String())
  })
}