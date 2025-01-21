import type { ICollection } from "../domain/ICollection";
import { Collection } from "../domain/Collection";
import { PrismaClient } from "@prisma/client";

export class CollectionRepository implements ICollection {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  async find(id: number): Promise<Collection | null> {
    const collection = await this.db.collection.findUnique({
      where: {
        id: id
      }
    });
    return collection;
  }
  async findAll(): Promise<Collection[]> {
    const collections = await this.db.collection.findMany();
    return collections;
  }
  async update(id: number, name?: string, description?: string): Promise<Collection | null> {
    const oldCollection = await this.db.collection.findUnique({
      where: {
        id: id
      }
    });
    if (!oldCollection) {
      return null;
    }
    const collection = await this.db.collection.update({
      where: {
        id: id
      },
      data: {
        name: name,
        description: description
      }
    });
    return new Collection(collection.id, collection.name, collection.createdAt, collection.updatedAt, collection.description);
  }
  async delete(id: number): Promise<Collection | null> {
    const collection = await this.db.collection.findUnique({
      where: {
        id: id
      }
    });
    if (!collection) {
      return null;
    }
    await this.db.collection.delete({
      where: {
        id: id
      }
    });
    return collection;
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