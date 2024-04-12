import { Hono } from "hono";

const app = new Hono().basePath("/api");

app
  .get("/articles", (c) => {
    return c.json({
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
  })
  .post("/articles", (c) => {
    return c.text("TODO");
  })
  .get("/articles/feed", (c) => {
    return c.text("TODO");
  })
  .get("/articles/:slug", (c) => {
    return c.text("TODO");
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
    return c.text("TODO");
  })
  .put("/user", (c) => {
    return c.text("TODO");
  })
  .post("/users", (c) => {
    return c.text("TODO");
  })
  .post("/users/login", (c) => {
    return c.text("TODO");
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
        new Request("http://localhost/api/articles", { method: "POST" })
      );
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("TODO");
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
