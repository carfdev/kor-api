import type { ICollection } from "../domain/ICollection";

export class GetCollection {
  constructor(private collectionRepository: ICollection) {}

  async run(id: number) {
    const collection = await this.collectionRepository.find(id);
    
    if (!collection) {
      return null;
    }

    if (!collection.description) {
      return {
        id: collection.id,
        name: collection.name
      };
    }

    return {
      id: collection.id,
      name: collection.name,
      description: collection.description
    };
  }
}