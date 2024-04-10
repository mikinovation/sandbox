import { string, z } from "zod";

export const articleIdSchema = string().uuid();
export type ArticleId = z.infer<typeof articleIdSchema>;

export const slugSchema = string().min(1).max(255);
export type Slug = z.infer<typeof slugSchema>;

export const titleSchema = string().min(1).max(255);
export type Title = z.infer<typeof titleSchema>;

export const descriptionSchema = string().min(1).max(255);
export type Description = z.infer<typeof descriptionSchema>;

export const bodySchema = string().min(1);
export type Body = z.infer<typeof bodySchema>;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("articleIdSchema", () => {
    it("accepts valid article IDs", () => {
      expect(
        articleIdSchema.safeParse("123e4567-e89b-12d3-a456-426614174000")
          .success
      ).toBe(true);
    });

    it("rejects invalid article IDs", () => {
      expect(articleIdSchema.safeParse("invalid").success).toBe(false);
    });
  });

  describe("slugSchema", () => {
    it("accepts valid slugs", () => {
      expect(slugSchema.safeParse("slug").success).toBe(true);
    });

    it("rejects slugs that are too long", () => {
      expect(slugSchema.safeParse("a".repeat(256)).success).toBe(false);
    });
  });

  describe("titleSchema", () => {
    it("accepts valid titles", () => {
      expect(titleSchema.safeParse("title").success).toBe(true);
    });

    it("rejects titles that are too long", () => {
      expect(titleSchema.safeParse("a".repeat(256)).success).toBe(false);
    });
  });

  describe("descriptionSchema", () => {
    it("accepts valid descriptions", () => {
      expect(descriptionSchema.safeParse("description").success).toBe(true);
    });

    it("rejects descriptions that are too long", () => {
      expect(descriptionSchema.safeParse("a".repeat(256)).success).toBe(false);
    });
  });

  describe("bodySchema", () => {
    it("accepts valid bodies", () => {
      expect(bodySchema.safeParse("body").success).toBe(true);
    });

    it("rejects empty bodies", () => {
      expect(bodySchema.safeParse("").success).toBe(false);
    });
  });
}
