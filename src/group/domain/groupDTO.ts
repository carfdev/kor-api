import { t } from "elysia";

export const createGroupDTO = {
  body: t.Object({
    collectionId: t.Number(),
    name: t.String(),
    description: t.Optional(t.String())
  }),

  detail: {
    tags: ['Group'],
    summary: 'Create a new group',
    description: 'Create a new group with the given name and description',
    responses: {
      201: {
        description: 'Group created successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                description: { type: 'string' }
              },
              example: {
                id: 1,
                name: 'My Collection',
                description: 'This is my collection'
              }
            }
          }
        }
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Name is required'
              }
            }
          }
        }
      },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Unauthorized'
              }
            }
          }
        }
      },
      409: {
        description: 'Conflict',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Collection already exists'
              }
            }
          }
        }
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Internal Server Error'
              }
            }
          }
        }
      }
    }
  } 
} 