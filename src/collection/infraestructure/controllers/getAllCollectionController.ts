import { GetAllCollection } from "@/collection/application/getAll";

export class GetAllCollectionController {
  constructor(private getAllCollection: GetAllCollection) {}
  async run({set, access, headers}: {set: any, access: any, headers: any}) {
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

      const { id } = await access.verify(token);


      if (!id) {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      return this.getAllCollection.run();

    } catch (e) {
      const error = e as Error;
      set.status = 500;
      return {
        message: error.message
      }
    }
  }
}