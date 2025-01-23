import { t } from "elysia";

export const createUserDTO = {
  body: t.Object({
    email: t.String({
      format: "email",
      error: { message: "Invalid email" }
    }),
    password: t.String(
      {
        minLength: 8,
        error: { message: "Password must be at least 8 characters" }
      }
    )
  }, {
    error: { message: "Invalid request body" }
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
                    data: {
                      type: 'object',
                      properties: {
                        user: {
                          type: 'object',
                          properties: {
                            id: { type: 'string' },
                            email: { type: 'string' }
                          }
                        }
                      }
                    }
                  }
                }
              },
              example: {
                data: {
                  user: {
                    id: '65d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6',
                    email: '3yQpY@example.com'
                  }
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
      422: {
        description: 'Unprocessable Entity',
        content: {
          'application/json': {
            schema: {
              type: "object",
              properties: {
                  message: { type: "string" },
              },
          },
              example: {
                message: "Password must be at least 8 characters"
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
    email: t.String({
      format: "email",
      error: { message: "Invalid email" }
    }),
    password: t.String({
      minLength: 8,
      error: { message: "Password must be at least 8 characters" }
    })
  }, {
    error: { message: "Invalid request body" }
  }),
  detail: {
    tags: ['Auth'],
    summary: 'Login a user',
    description: 'Login a user with the given email and password',
    responses: {
      200: {
        description: 'User logged in successfully',
        headers: {
          'Set-Cookie': {
            description: 'The auth cookie',
            schema: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
          }
        },
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: {
                  token: { type: 'string' },
                  user: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      email: { type: 'string' }
                    }
                  },
                  message: { type: 'string' }
                }
              },
              example: {
                data: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                  user: {
                    id: '65d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6',
                    email: '3yQpY@example.com'
                  },
                  message: 'Login successful'
                
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


export const refreshUserDTO = {
  detail: {
    tags: ['Auth'],
    summary: 'Refresh access token',
    description: 'Refresh access token with the given refresh token',
    security: [
      {
        cookieAuth: []
      }
    ],
    responses: {
      200: {
        description: 'Token refreshed successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: { type: 'string' }
              },
              example: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
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
                message: 'Refresh token is required'
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

export const updatePasswordDTO = {
  params: t.Object({
    token: t.String()
  }),
  body: t.Object({
    password: t.String({
      minLength: 8,
      error: { message: "Password must be at least 8 characters" }
    })
  }, {
    error: { message: "Invalid request body" }
  }),
  detail: {
    tags: ['Auth'],
    summary: 'Update password',
    description: 'Update password with the given token',
    security: [
      {
        cookieAuth: []
      }
    ],
    responses: {
      200: {
        description: 'Password updated successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Password updated successfully'
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
                message: 'Password is required'
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

export const resetPasswordDTO = {
  body: t.Object({
    email: t.String({
      format: "email",
      error: { message: "Invalid email" }
    })
  }, {
    error: { message: "Invalid request body" }
  }),
  detail: {
    tags: ['Auth'],
    summary: 'Reset password',
    description: 'Reset password with the given email',
    responses: {
      200: {
        description: 'Password reset successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Password reset successfully'
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
                message: 'Email is required'
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
