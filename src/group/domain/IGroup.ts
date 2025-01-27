import { Group } from "./Group";

export interface IGroup {
  create(collectionId: number, name: string, description?: string): Promise<Group>;
  find(id: number): Promise<Group | null>;
  findAll(): Promise<Group[]>;
  update(id: number, name?: string, description?: string): Promise<Group | null>;
  delete(id: number): Promise<Group | null>;
}