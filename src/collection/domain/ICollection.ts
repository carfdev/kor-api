import { Collection } from "./Collection";

export interface ICollection {
  create(name: string, description?: string): Promise<Collection>;
  find(id: number): Promise<Collection | null>;
  findAll(): Promise<Collection[]>;
  update(id: number, name: string, description?: string): Promise<Collection>;
  delete(id: number): Promise<void>;
}