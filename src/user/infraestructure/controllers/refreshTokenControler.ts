export class RefreshTokenController {
  constructor() {}

  async run({ access, refresh, set, cookie: { auth }}: { access: any, refresh: any, set: any, cookie: any }) {
    try {
      const { id } = await refresh.verify(auth.value);
      if (!id ) {
        set.status = 401;
        return {
          message: "Invalid refresh token"
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