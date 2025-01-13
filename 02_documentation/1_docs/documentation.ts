const packageJson = require('../package.json');

const documentation = {
  // configs
  openapi: "3.0.0",
  info: {
    title: packageJson.application_name.toUpperCase(),
    version: packageJson.version,
    description: packageJson.description,
  },
  // components, security etc...
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  // endpoints
  paths: {
    // HELLO WORLD
    // --------------------------------------------------
    "/helloworld/helloworld": {
      get: {
        summary: "Get hello world message",
        description: "Retrieves a hello world message. You can optionally provide a custom message via query parameter.",
        tags: ["HELLO WORLD"],
        parameters: [
          {
            name: "message",
            in: "query",
            required: false,
            description: "Custom message to be returned. Defaults to 'Hello World!!!' if not provided.",
            schema: {
              type: "string",
              example: "Hello from the API!"
            }
          }
        ],
        responses: {
          "200": {
            description: "Successful response with hello world message.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "success"
                    },
                    code: {
                      type: "integer",
                      example: 200
                    },
                    message: {
                      type: "string",
                      example: "Hello World!!!"
                    },
                    links: {
                      type: "object",
                      properties: {
                        self: {
                          type: "string",
                          example: "/helloworld/helloworld"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    // -------------------------------------------------- (end hello world)
    // BIT COIN
    // --------------------------------------------------
    "/bitcoin/generate-wallet": {
      "get": {
        "summary": "Generate a wallet mnemonic",
        "description": "Generates a mnemonic (seed) with either 12 or 24 words to create a cryptocurrency wallet. The number of words can be specified via the `words` query parameter. If not provided, the default is 12 words.",
        "tags": ["BITCOIN"],
        "parameters": [
          {
            "name": "words",
            "in": "query",
            "required": false,
            "description": "The number of words for the mnemonic. It can either be 12 or 24. Defaults to 12 if not provided.",
            "schema": {
              "type": "integer",
              "example": 24
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response with the generated wallet mnemonic.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "success"
                    },
                    "code": {
                      "type": "integer",
                      "example": 200
                    },
                    "message": {
                      "type": "string",
                      "example": "Wallet generated successfully"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "seeds": {
                            "type": "string",
                            "example": "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon"
                          }
                        }
                      }
                    },
                    "links": {
                      "type": "object",
                      "properties": {
                        "self": {
                          "type": "string",
                          "example": "/bitcoin/generate-wallet?words=24"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request - If the `words` parameter is invalid (not a number between 12 and 24).",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "error"
                    },
                    "code": {
                      "type": "integer",
                      "example": 400
                    },
                    "message": {
                      "type": "string",
                      "example": "Bad request. The 'words' parameter must be an integer between 12 and 24."
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    // -------------------------------------------------- (end bit coin)
  }
};

export default documentation;
