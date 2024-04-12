import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("GET /", () => {
    it("should return 'Hello Hono!'", async () => {
      const res = await app.request("/api");
      const text = await res.text();
      expect(text).toBe("Hello Hono!");
    });
  });
}
