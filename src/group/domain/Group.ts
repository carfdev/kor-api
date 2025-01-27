export class Group {
  constructor(
    public id: number,
    public name: string,
    public collectionId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string | null
  ) {}
}