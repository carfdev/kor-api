import type { ICollection } from "../domain/ICollection";

export class CreateCollection {
  constructor(private collectionRepository: ICollection) {}
  async run(name: string, description?: string) {
    return this.collectionRepository.create(name, description);
  }
}