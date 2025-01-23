import type { IUser } from "../domain/IUser";
import type { IHash } from "@/services/interfaces/IHash";

export class UpdatePassword {
  constructor(
    private userRepository: IUser,
    private hash: IHash
  ) {}
  async run(id: string, password: string) {
    const passwordHash = await this.hash.hash(password);
    return await this.userRepository.updatePassword(id, passwordHash);
  }
}