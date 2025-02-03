import { CreateGroup } from "@/group/application/create";

export class CreateGroupController {
  constructor(private createGroup: CreateGroup) {}

  async run({ body, set, access, headers }: { body: { collectionId: number,name: string, description?: string}, set: any, access: any, headers: any}) {
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

    if (id !== '534635a6-fa3d-4a87-89f5-62cb99beb314') {
      set.status = 401;
      return {
        message: "Unauthorized"
      }
    }

    const group = await this.createGroup.run(body.collectionId, body.name, body.description);
    set.status = 201;
    return group;
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