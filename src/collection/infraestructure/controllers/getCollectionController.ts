import { GetCollection } from "@/collection/application/get";

export class GetCollectionController {
  constructor(private getCollection: GetCollection) {}
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

      if (!userId) {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      const collection = await this.getCollection.run(id);

      if (!collection) {
        set.status = 404;
        return {
          message: "Collection not found"
        }
      }

      return collection;
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
    }
  }
}