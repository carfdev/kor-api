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

      if (userId !== 'ed44735a-15e5-462b-b4cd-face0592fbbc') {
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