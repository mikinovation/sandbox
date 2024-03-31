import { object, string, z } from "zod";

export const tagIdSchema = string().uuid();
export type TagId = z.infer<typeof tagIdSchema>;

export const tagNameSchema = string().min(1).max(255);
export type TagName = z.infer<typeof tagNameSchema>;

export const tagSchema = object({
  id: tagIdSchema,
  name: tagNameSchema,
});

export type Tag = z.infer<typeof tagSchema>;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("tagIdSchema", () => {
    it("accepts valid tag IDs", () => {
      expect(
        tagIdSchema.safeParse("123e4567-e89b-12d3-a456-426614174000").success
      ).toBe(true);
    });

    it("rejects invalid tag IDs", () => {
      expect(tagIdSchema.safeParse("invalid").success).toBe(false);
    });
  });

  describe("tagNameSchema", () => {
    it("accepts valid tag names", () => {
      expect(tagNameSchema.safeParse("tag").success).toBe(true);
    });

    it("rejects tag names that are too long", () => {
      expect(tagNameSchema.safeParse("a".repeat(256)).success).toBe(false);
    });
  });

  describe("tagSchema", () => {
    it("accepts valid tags", () => {
      expect(
        tagSchema.safeParse({
          id: "123e4567-e89b-12d3-a456-426614174000",
          name: "tag",
        }).success
      ).toBe(true);
    });

    it("rejects invalid tags", () => {
      expect(tagSchema.safeParse({ id: "invalid", name: "tag" }).success).toBe(
        false
      );
    });
  });
}
