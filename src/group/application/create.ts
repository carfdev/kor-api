import type { IGroup } from "../domain/IGroup";

export class CreateGroup {
  constructor(private groupRepository: IGroup) {}
  async run(collectionId: number, name: string, description?: string) {
    return this.groupRepository.create(collectionId ,name, description);
  }
}