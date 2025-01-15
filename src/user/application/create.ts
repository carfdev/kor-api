import type { IUser } from "../domain/IUser";

export class CreateUser {
  constructor(private userRepository: IUser) {}
  async run(email: string, password: string) {
    return await this.userRepository.create(email, password);
  }
}