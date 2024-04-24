import { Hono } from "hono";
import { logger } from "hono/logger";
import { zValidator } from "@hono/zod-validator";
import { ZodSchema } from "zod";
import {
  createArticleInputSchema,
  getArticleParamSchema,
  getArticleResponseSchmea,
  getArticlesQuerySchema,
  getArticlesResponseSchema,
  getFeedQuerySchema,
} from "./entities/article/model";
import {
  userSchema,
  loginInputSchema,
  registerationInputSchema,
  updateUserInputSchema,
} from "./entities/user/model";
import { sign } from "hono/jwt";

const SECRET = "MY_SECRET";

/**
 * Status Code
 * @see {@link https://main--realworld-docs.netlify.app/docs/specs/backend-specs/error-handling}
 */
const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

const validateParamWith = (schema: ZodSchema) => {
  return zValidator("param", schema, (result, c) => {
    if (!result.success)
      return c.json(result.error, STATUS_CODE.UNPROCESSABLE_ENTITY);
    return result.data;
  });
};

const validateQueryWith = (schema: ZodSchema) => {
  return zValidator("query", schema, (result, c) => {
    if (!result.success)
      return c.json(result.error, STATUS_CODE.UNPROCESSABLE_ENTITY);
    return result.data;
  });
};

const validateJsonWith = (schema: ZodSchema) => {
  return zValidator("json", schema, (result, c) => {
    if (!result.success)
      return c.json(result.error, STATUS_CODE.UNPROCESSABLE_ENTITY);
    return result.data;
  });
};

/**
 * Endpoints
 * @see {@link https://main--realworld-docs.netlify.app/docs/specs/backend-specs/endpoints}
 */
const app = new Hono().basePath("/api");

// only use logger middleware in development and production
if (!import.meta.vitest) {
  app.use(logger());
}

app
  .get("/articles", validateQueryWith(getArticlesQuerySchema), (c) => {
    const { tag, author, favorited, limit, offset } = c.req.valid("query");

    console.log(tag, author, favorited, limit, offset);

    // TODO: get articles
    const articles = [
      {
        slug: "string",
        title: "string",
        description: "string",
        body: "string",
        tagList: ["string"],
        createdAt: "2024-04-12T13:28:33.205Z",
        updatedAt: "2024-04-12T13:28:33.205Z",
        favorited: true,
        favoritesCount: 0,
        author: {
          username: "string",
          bio: "string",
          image: "string",
          following: true,
        },
      },
    ];
    const articlesCount = 1;

    return c.json(
      getArticlesResponseSchema.parse({ articles, articlesCount }),
      STATUS_CODE.OK
    );
  })
  .post("/articles", validateJsonWith(createArticleInputSchema), (c) => {
    const { article: body } = c.req.valid("json");

    const existedSlug = null;

    if (existedSlug)
      return c.json("slug existed", STATUS_CODE.UNPROCESSABLE_ENTITY);

    // transaction start
    // TODO: create article
    const article = {
      slug: body.slug,
      title: body.title,
      description: body.description,
      body: body.body,
      tagList: body.tagList,
      favorited: true,
      favoritesCount: 0,
      author: {
        username: "string",
        bio: "string",
        image: "string",
        following: true,
      },
      createdAt: "2024-04-13T00:27:28.169Z",
      updatedAt: "2024-04-13T00:27:28.169Z",
    };

    return c.json(getArticleResponseSchmea.parse(article), STATUS_CODE.CREATED);
  })
  .get("/articles/feed", validateQueryWith(getFeedQuerySchema), (c) => {
    const { limit, offset } = c.req.valid("query");

    console.log(limit, offset);

    // TODO: get articles
    const articles = [
      {
        slug: "string",
        title: "string",
        description: "string",
        body: "string",
        tagList: ["string"],
        createdAt: "2024-04-12T13:28:33.205Z",
        updatedAt: "2024-04-12T13:28:33.205Z",
        favorited: true,
        favoritesCount: 0,
        author: {
          username: "string",
          bio: "string",
          image: "string",
          following: true,
        },
      },
    ];
    const articlesCount = 1;

    return c.json(
      getArticlesResponseSchema.parse({ articles, articlesCount }),
      STATUS_CODE.OK
    );
  })
  .get("/articles/:slug", validateParamWith(getArticleParamSchema), (c) => {
    const { slug } = c.req.valid("param");

    const article = {
      slug,
      title: "string",
      description: "string",
      body: "string",
      tagList: ["string"],
      favorited: true,
      favoritesCount: 0,
      author: {
        username: "string",
        bio: "string",
        image: "string",
        following: true,
      },
      createdAt: "2024-04-12T13:28:33.205Z",
      updatedAt: "2024-04-12T13:28:33.205Z",
    };

    if (!article) return c.json("article not found", STATUS_CODE.NOT_FOUND);

    return c.json(getArticleResponseSchmea.parse(article), STATUS_CODE.OK);
  })
  .put("/articles/:slug", (c) => {
    return c.text("TODO");
  })
  .delete("/articles/:slug", (c) => {
    return c.text("TODO");
  })
  .get("/articles/:slug/comments", (c) => {
    return c.text("TODO");
  })
  .post("/articles/:slug/comments", (c) => {
    return c.text("TODO");
  })
  .delete("/articles/:slug/comments/:id", (c) => {
    return c.text("TODO");
  })
  .post("/articles/:slug/favorite", (c) => {
    return c.text("TODO");
  })
  .delete("/articles/:slug/favorite", (c) => {
    return c.text("TODO");
  })
  .get("/profiles/:username", (c) => {
    return c.text("TODO");
  })
  .post("/profiles/:username/follow", (c) => {
    return c.text("TODO");
  })
  .delete("/profiles/:username/follow", (c) => {
    return c.text("TODO");
  })
  .get("/tags", (c) => {
    return c.text("TODO");
  })
  .get("/user", (c) => {
    const body = c.get("jwtPayload");
    const user = {
      email: body.email,
      username: "string",
      bio: "string",
      image: "string",
    };

    return c.json(userSchema.parse(user), STATUS_CODE.OK);
  })
  .put("/user", validateJsonWith(updateUserInputSchema), (c) => {
    const { user: body } = c.req.valid("json");
    const { email } = c.get("jwtPayload");
    const user = {
      email,
      username: body.username,
      bio: body.bio,
      image: body.image,
    };

    return c.json(userSchema.parse(user), STATUS_CODE.OK);
  })
  .post("/users", validateJsonWith(registerationInputSchema), async (c) => {
    const { user: body } = c.req.valid("json");

    const existedUser = null;

    if (existedUser) {
      return c.json("user registered", STATUS_CODE.UNPROCESSABLE_ENTITY);
    }

    const user = {
      email: body.email,
      username: body.username,
      bio: "string",
      image: "string",
    };

    const token = await sign(user, SECRET);

    return c.json(userSchema.parse({ ...user, token }), STATUS_CODE.CREATED);
  })
  .post("/users/login", validateJsonWith(loginInputSchema), async (c) => {
    const { user: body } = c.req.valid("json");

    const user = {
      id: "string",
      email: body.email,
      username: body.username,
      bio: "string",
      image: "string",
    };

    if (!user) {
      return c.json("user not authenticated", STATUS_CODE.UNAUTHORIZED);
    }

    const token = await sign(user, SECRET);

    return c.json(userSchema.parse({ ...user, token }), STATUS_CODE.OK);
  });

export default app;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("GET /api/articles", () => {
    it("should return articles", async () => {
      const res = await app.request("/api/articles");
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual({
        articles: [
          {
            articles: [
              {
                slug: "string",
                title: "string",
                description: "string",
                body: "string",
                tagList: ["string"],
                createdAt: "2024-04-12T13:28:33.205Z",
                updatedAt: "2024-04-12T13:28:33.205Z",
                favorited: true,
                favoritesCount: 0,
                author: {
                  username: "string",
                  bio: "string",
                  image: "string",
                  following: true,
                },
              },
            ],
            articlesCount: 0,
          },
        ],
      });
    });
  });

  describe("POST /api/articles", () => {
    it("should create an article", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            article: {
              title: "string",
              description: "string",
              body: "string",
              tagList: ["string"],
            },
          }),
        })
      );
      expect(res.status).toBe(201);
      expect(await res.json()).toEqual({
        article: {
          slug: "string",
          title: "string",
          description: "string",
          body: "string",
          tagList: ["string"],
          createdAt: "2024-04-13T00:27:28.169Z",
          updatedAt: "2024-04-13T00:27:28.169Z",
          favorited: true,
          favoritesCount: 0,
          author: {
            username: "string",
            bio: "string",
            image: "string",
            following: true,
          },
        },
      });
    });
  });

  describe("GET /api/articles/feed", () => {
    it("should return most recent articles from users you follow", async () => {
      const res = await app.request("/api/articles/feed");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("GET /api/articles/:slug", () => {
    it("should return an article", async () => {
      const res = await app.request("/api/articles/:slug");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("PUT /api/articles/:slug", () => {
    it("should update an article", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug", { method: "PUT" })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("DELETE /api/articles/:slug", () => {
    it("should delete an article", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug", { method: "DELETE" })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("GET /api/articles/:slug/comments", () => {
    it("should return an article's comments", async () => {
      const res = await app.request("/api/articles/:slug/comments");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("POST /api/articles/:slug/comments", () => {
    it("should create a comment", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug/comments", {
          method: "POST",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("DELETE /api/articles/:slug/comments/:id", () => {
    it("should delete a comment", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug/comments/:id", {
          method: "DELETE",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("POST /api/articles/:slug/favorite", () => {
    it("should favorite an article", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug/favorite", {
          method: "POST",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("DELETE /api/articles/:slug/favorite", () => {
    it("should unfavorite an article", async () => {
      const res = await app.request(
        new Request("http://localhost/api/articles/:slug/favorite", {
          method: "DELETE",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("GET /api/profiles/:username", () => {
    it("should return a profile", async () => {
      const res = await app.request("/api/profiles/:username");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("POST /api/profiles/:username/follow", () => {
    it("should follow a user", async () => {
      const res = await app.request(
        new Request("http://localhost/api/profiles/:username/follow", {
          method: "POST",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("DELETE /api/profiles/:username/follow", () => {
    it("should unfollow a user", async () => {
      const res = await app.request(
        new Request("http://localhost/api/profiles/:username/follow", {
          method: "DELETE",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("GET /api/tags", () => {
    it("should return tags", async () => {
      const res = await app.request("/api/tags");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("GET /api/user", () => {
    it("should return the current user", async () => {
      const res = await app.request("/api/user");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("PUT /api/user", () => {
    it("should update the current user", async () => {
      const res = await app.request(
        new Request("http://localhost/api/user", {
          method: "PUT",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("POST /api/users", () => {
    it("should create a user", async () => {
      const res = await app.request(
        new Request("http://localhost/api/users", {
          method: "POST",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });

  describe("POST /api/users/login", () => {
    it("should login a user", async () => {
      const res = await app.request(
        new Request("http://localhost/api/users/login", {
          method: "POST",
        })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
    });
  });
}
