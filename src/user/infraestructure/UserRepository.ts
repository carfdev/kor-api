import type { IUser } from "../domain/IUser";
import { User } from "../domain/User";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUser {
  
  constructor(private db: PrismaClient) {
    this.db = new PrismaClient();
  }
  async create(email: string, password: string): Promise<User> {
    const user = await this.db.user.create({
      data: {
        email: email,
        password: password
      }
    });

    return new User(user.id, user.email, user.password);
  }
}