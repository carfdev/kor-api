import type { IGroup } from "../domain/IGroup";
import { Group } from "../domain/Group";
import { PrismaClient } from "@prisma/client";

export class GroupRepository implements IGroup {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async create(collectionId: number, name: string, description?: string): Promise<Group> {
    const group = await this.db.group.create({
      data: {
        name: name,
        collectionId: collectionId,
        description: description
      }
    });
    return new Group(group.id, group.name, group.collectionId, group.createdAt, group.updatedAt, group.description);
  }

  async find(id: number): Promise<Group | null> {
    const group = await this.db.group.findUnique({
      where: {
        id: id
      }
    });
    if (!group) {
      return null;
    }
    return new Group(group.id, group.name, group.collectionId, group.createdAt, group.updatedAt, group.description);
  }

  async findAll(): Promise<Group[]> {
    const groups = await this.db.group.findMany();
    return groups.map(group => new Group(group.id, group.name, group.collectionId, group.createdAt, group.updatedAt, group.description));
  }

  async update(id: number, name?: string, description?: string): Promise<Group | null> {
    const group = await this.db.group.update({
      where: {
        id: id
      },
      data: {
        name: name,
        description: description
      }
    });
    if (!group) {
      return null;
    }
    return new Group(group.id, group.name, group.collectionId, group.createdAt, group.updatedAt, group.description);
  }

  async delete(id: number): Promise<Group | null> {
    const group = await this.db.group.delete({
      where: {
        id: id
      }
    });
    if (!group) {
      return null;
    }
    return new Group(group.id, group.name, group.collectionId, group.createdAt, group.updatedAt, group.description);
  }
}