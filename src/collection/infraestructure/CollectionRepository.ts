import type { ICollection } from "../domain/ICollection";
import { Collection } from "../domain/Collection";
import { PrismaClient } from "@prisma/client";

export class CollectionRepository implements ICollection {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  find(id: number): Promise<Collection | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Collection[]> {
    throw new Error("Method not implemented.");
  }
  update(id: number, name: string, description?: string): Promise<Collection> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(name: string, description?: string): Promise<Collection> {
    const collection = await this.db.collection.create({
      data: {
        name: name,
        description: description
      }
    });
    return new Collection(collection.id, collection.name, collection.createdAt, collection.updatedAt, collection.description);
  }
}