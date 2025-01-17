import { Elysia } from "elysia";
import { userRouter } from "@/user/userRouter";
import { collectionRouter } from "@/collection/collectionRouter";
import { swagger } from '@elysiajs/swagger'

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia()
    this.app.use(swagger({
      path: '/v1/swagger',
      documentation: {
        info: {
            title: 'API Driving Theory Practice',
            version: '1.0.0'
        },
        tags: [
          { name: 'Auth', description: 'Authentication endpoints' },
          { name: 'Collection', description: 'Collection endpoints' },
        ]
    }
  }))
    this.app.group('/api/v1', (app) => 
      app
        .use(userRouter)
        .use(collectionRouter)
    )
  }

  public start() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(
        `🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`
      );
    });
  }
}