import type { IUser } from "../domain/IUser";
import type { IHash } from "@/services/interfaces/IHash";

export class LoginUser {
  constructor(
    private userRepository: IUser,
    private hash: IHash
  ) {}

  async run(email: string, password: string) {
    const user = await this.userRepository.find(email);
    if (!user) {
      return new Error("User not found");
    }
    const isValid = await this.hash.compare(password, user.password);
    if (!isValid) {
      return new Error("Invalid password");
    }

    return user;
  }

  async updateRefreshToken(id: string, refresh_token: string) {
    await this.userRepository.addRefreshToken(id, refresh_token);
  }
}