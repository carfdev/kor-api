import type { IUser } from "../domain/IUser";
import { User } from "../domain/User";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUser {
  private db: PrismaClient
  constructor() {
    this.db = new PrismaClient();
  }
  async create(email: string, password: string): Promise<User> {
    const user = await this.db.user.create({
      data: {
        email: email,
        password: password,
        refresh_token: ""
      }
    });

    return new User(user.id, user.email, user.password);
  }

  async addRefreshToken(id: string, refresh_token: string): Promise<void> {
    await this.db.user.update({
      where: {
        id: id
      },
      data: {
        refresh_token: refresh_token
      }
    });
  }

  async getRefreshToken(id: string): Promise<string | null> {
    const user = await this.db.user.findUnique({
      where: {
        id: id
      }
    });
    if (!user) {
      return null;
    }
    return user.refresh_token;
  }

  async find(email: string): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        email: email
      }
    });
    if (!user) {
      return null;
    }
    return new User(user.id, user.email, user.password);
  }

  async updatePassword(id: string, password: string): Promise<void> {
    await this.db.user.update({
      where: {
        id: id
      },
      data: {
        password: password
      }
    });
  }
}