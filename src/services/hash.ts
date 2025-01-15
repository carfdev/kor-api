import type { IHash } from "./interfaces/IHash";

export class Hash implements IHash {
  async hash(password: string) {
    return await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 10,
    });
  }

  async compare(password: string, hash: string) {
    return await Bun.password.verify(password, hash);
  }
}