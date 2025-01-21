import type { ICollection } from "../domain/ICollection";

export class UpdateCollection {
  constructor(private collectionRepository: ICollection) {}
  async run(id: number, name?: string, description?: string) {
    return this.collectionRepository.update(id, name, description);
  }
}