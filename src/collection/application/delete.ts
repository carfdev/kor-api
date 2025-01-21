import type { ICollection } from "../domain/ICollection";

export class DeleteCollection {
  constructor(private collectionRepository: ICollection) {}
  async run(id: number) {
    return this.collectionRepository.delete(id);
  }
}