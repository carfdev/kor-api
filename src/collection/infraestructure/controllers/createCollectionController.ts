import { CreateCollection } from "@/collection/application/create";

export class CreateCollectionController {
  constructor(private createCollection: CreateCollection) {}
  async run({ body, set, access, headers }: { body: {name: string, description?: string}, set: any, access: any, headers: any}) {
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

      if (id !== 'ccaa43b3-ba50-4261-a181-0cc9fc5ccad8') {
        set.status = 401;
        return {
          message: "Unauthorized"
        }
      }

      if (!body.name) {
        set.status = 400;
        return {
          message: "Name is required"
        }
      }
      

      const collection = await this.createCollection.run(body.name, body.description);
      set.status = 201;
      return {
        data: {
          collection: collection
        }
      }
    } catch (e: any) {
      if (e.code === "P2002") {
        set.status = 409;
        return {
          message: "Collection already exists"
        }
      }
      set.status = 500;
      return {
        message: e.message
      }
    }
  }
}