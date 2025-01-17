import { t } from "elysia";

export const createUserDTO = {
  body: t.Object({
    email: t.String(),
    password: t.String()
  }),
  detail: {
    tags: ['Auth'],
    summary: 'Create a new user',
    description: 'Create a new user with the given email and password',
    responses: {
      201: {
        description: 'User created successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  properties: {
                    id: { type: 'number' },
                    email: { type: 'string' },
                    password: { type: 'string' }
                  }
                }
              },
              example: {
                user: {
                  id: 1,
                  email: '3yQpY@example.com',
                  password: 'password'
                }
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
                message: 'Email and password are required'
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
                message: 'Email already exists'
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

export const loginUserDTO = {
  body: t.Object({
    email: t.String(),
    password: t.String()
  }),
  detail: {
    tags: ['Auth'],
    summary: 'Login a user',
    description: 'Login a user with the given email and password',
    responses: {
      200: {
        description: 'User logged in successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  properties: {
                    id: { type: 'number' },
                    email: { type: 'string' },
                    password: { type: 'string' }
                  }
                }
              },
              example: {
                user: {
                  id: 1,
                  email: '3yQpY@example.com',
                  password: 'password'
                }
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
                message: 'Email and password are required'
              }
            }
          }
        }
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'User not found'
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
                message: 'Invalid password'
              }
            }
          }
        }
      }
    }
  }
}


export const refreshUserDTO = {
  detail: {
    tags: ['Auth']
  }
}
