import { DeleteCollection } from "@/collection/application/delete";

export class DeleteCollectionController {
  constructor(private deleteCollection: DeleteCollection) {}
  async run({ params: { id }, set, access, headers }: { params: { id: number }, set: any, access: any, headers: any}) {
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

      const collection = await this.deleteCollection.run(id);

      if (!collection) {
        set.status = 404;
        return {
          message: "Collection not found"
        }
      }

      return {
        message: "Collection deleted successfully"
      };
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
  }
  }
}