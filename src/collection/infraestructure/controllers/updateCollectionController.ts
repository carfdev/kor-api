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

      if (userId !== '534635a6-fa3d-4a87-89f5-62cb99beb314') {
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