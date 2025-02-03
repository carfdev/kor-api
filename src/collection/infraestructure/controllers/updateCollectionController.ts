import { UpdateCollection } from "@/collection/application/update";

export class UpdateCollectionController {
  constructor(private updateCollection: UpdateCollection) {}

  async run({ body: { name, description }, set, access, headers, params: { id } }: { body: { name?: string, description?: string }, set: any, access: any, headers: any, params: { id: number }}) {
    try {
      const authorization = headers["authorization"]

      if (!authorization) {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      const token = authorization.split(" ")[1];

      if (!token) {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      const { id: userId } = await access.verify(token);

      if (userId !== 'ed44735a-15e5-462b-b4cd-face0592fbbc') {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      const collection = await this.updateCollection.run(id, name, description);

      if (!collection) {
        set.status = 404;
        return {
          message: "Collection not found"
        }
      }

      return {
        data: {
          collection: collection
        }
      }
  } catch (e: any) {
    set.status = 500;
    return {
      message: e.message
    }
  }
  }
}