import { User } from "./User";

export interface IUser {
  create(email: string, password: string): Promise<User>;
}