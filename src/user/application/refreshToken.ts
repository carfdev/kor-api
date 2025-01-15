import type { IUser } from "../domain/IUser";

export class RefreshToken {
  constructor(
    private userRepository: IUser
  ) {}
  async run(id: string, refreshToken: string) {
    const dbRefreshToken = await this.userRepository.getRefreshToken(id);
    if (dbRefreshToken !== refreshToken) {
      return new Error("Invalid refresh token");
    }
    return true;
  }
}