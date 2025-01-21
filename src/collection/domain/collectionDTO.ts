import { t } from "elysia";

export const createCollectionDTO = {
  body: t.Object({
    name: t.String(),
    description: t.Optional(t.String())
  }),

  detail: {
    tags: ['Collection'],
    summary: 'Create a new collection',
    description: 'Create a new collection with the given name and description',
    responses: {
      201: {
        description: 'Collection created successfully',
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

export const getCollectionDTO = {
  params: t.Object({
    id: t.Number()
  }),
  detail: {
    tags: ['Collection'],
    summary: 'Get a collection by id',
    description: 'Get a collection by id with the given id',
    responses: {
      200: {
        description: 'Collection found successfully',
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
                message: 'Collection not found'
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

export const getAllCollectionDTO = {
  detail: {
    tags: ['Collection'],
    summary: 'Get all collections',
    description: 'Get all collections',
    responses: {
      200: {
        description: 'Collections found successfully',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
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

export const deleteCollectionDTO = {
  params: t.Object({
    id: t.Number()
  }),
  detail: {
    tags: ['Collection'],
    summary: 'Delete a collection by id',
    description: 'Delete a collection by id with the given id',
    responses: {
      200: {
        description: 'Collection deleted successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              },
              example: {
                message: 'Collection deleted successfully'
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
                message: 'Collection not found'
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
      }
    }
  }
}
