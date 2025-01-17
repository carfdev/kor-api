import { Group } from "@/group/domain/Group";

export class Question {
  constructor(
    public id: number,
    public question: string,
    public image: string,
    public options: string[],
    public correctAnswer: number,
    public groupId: number,
    public group: Group,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}