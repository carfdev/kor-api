import type { ICollection } from "../domain/ICollection";

export class GetAllCollection {
  constructor(private collectionRepository: ICollection) {}
  async run() {
    const collections = await this.collectionRepository.findAll();

    const formattedCollections = collections.map((collection) => {

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
    });

    return formattedCollections
    ;
  }
}