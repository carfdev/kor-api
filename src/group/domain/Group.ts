import { Question } from "@/question/domain/Question";
import { Collection } from "@/collection/domain/Collection";

export class Group {
  constructor(
    public id: number,
    public name: string,
    public collectionId: number,
    public collection: Collection,
    public questions: Question[],
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string
  ) {}
}