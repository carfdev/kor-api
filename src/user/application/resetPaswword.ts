import type { IUser } from "../domain/IUser";

export class ResetPassword {
  constructor(
    private userRepository: IUser
  ) {}
  async run(email: string) {
    const user = await this.userRepository.find(email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}