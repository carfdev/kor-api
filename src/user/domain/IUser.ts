import { User } from "./User";

export interface IUser {
  create(email: string, password: string, refresh_token?: string): Promise<User>;
  find(email: string): Promise<User | null>;
  addRefreshToken(id: string, refresh_token: string): Promise<void>;
  getRefreshToken(id: string): Promise<string | null>;
  updatePassword(id: string, password: string): Promise<void>;
}