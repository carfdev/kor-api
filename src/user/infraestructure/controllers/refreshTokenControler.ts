import { RefreshToken } from "@/user/application/refreshToken";

export class RefreshTokenController {
  constructor(private refreshToken: RefreshToken) {}

  async run({ access, refresh, set, cookie: { auth }}: { access: any, refresh: any, set: any, cookie: any }) {
    try {
      const { id } = await refresh.verify(auth.value);
      if (!id ) {
        set.status = 401;
        return {
          message: "Invalid refresh token"
        }
      }


      const dbRefreshToken = await this.refreshToken.run(id, auth.value);

      if (dbRefreshToken instanceof Error) {
        set.status = 401;
        return {
          message: dbRefreshToken.message
        }
      }
      
      const access_token = await access.sign({ id });
      set.status = 200;
      return {
        token: access_token
      }
    } catch (e: any) {
      set.status = 500;
      return {
        message: e.message
      }
    }

  }
}