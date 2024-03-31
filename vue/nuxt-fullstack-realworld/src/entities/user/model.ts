import { object, string, z } from "zod";

export const userIdSchema = string().uuid();
export type UserId = z.infer<typeof userIdSchema>;

export const userNameSchema = string().min(1).max(255);
export type UserName = z.infer<typeof userNameSchema>;

export const emailSchema = string().email().min(1).max(255);
export type Email = z.infer<typeof emailSchema>;

export const passwordSchema = string().min(8);
export type Password = z.infer<typeof passwordSchema>;

export const bioSchema = string().nullable();
export type Bio = z.infer<typeof bioSchema>;

export const imageSchema = string().nullable();
export type Image = z.infer<typeof imageSchema>;

export const userSchema = object({
  id: userIdSchema,
  userName: userNameSchema,
  email: emailSchema,
  bio: bioSchema,
  image: imageSchema,
});
export type User = z.infer<typeof userSchema>;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("userIdSchema", () => {
    it("accepts a valid UUID", () => {
      expect(
        userIdSchema.safeParse("123e4567-e89b-12d3-a456-426614174000").success
      ).toBe(true);
    });

    it("rejects an invalid UUID", () => {
      expect(userIdSchema.safeParse("invalid").success).toBe(false);
    });
  });

  describe("userNameSchema", () => {
    it("accepts a valid name", () => {
      expect(userNameSchema.safeParse("John Doe").success).toBe(true);
    });

    it("rejects an empty name", () => {
      expect(userNameSchema.safeParse("").success).toBe(false);
    });
  });

  describe("emailSchema", () => {
    it("accepts a valid email", () => {
      expect(emailSchema.safeParse("test@example.com").success).toBe(true);
    });

    it("rejects an invalid email", () => {
      expect(emailSchema.safeParse("invalid").success).toBe(false);
    });
  });

  describe("passwordSchema", () => {
    it("accepts a valid password", () => {
      expect(passwordSchema.safeParse("password123").success).toBe(true);
    });

    it("rejects a short password", () => {
      expect(passwordSchema.safeParse("short").success).toBe(false);
    });
  });

  describe("bioSchema", () => {
    it("accepts a valid bio", () => {
      expect(bioSchema.safeParse("Hello, world!").success).toBe(true);
    });

    it("accepts a null bio", () => {
      expect(bioSchema.safeParse(null).success).toBe(true);
    });
  });

  describe("imageSchema", () => {
    it("accepts a valid image URL", () => {
      expect(
        imageSchema.safeParse("https://example.com/image.jpg").success
      ).toBe(true);
    });

    it("accepts a null image", () => {
      expect(imageSchema.safeParse(null).success).toBe(true);
    });
  });

  describe("userSchema", () => {
    it("accepts a valid user", () => {
      expect(
        userSchema.safeParse({
          id: "123e4567-e89b-12d3-a456-426614174000",
          userName: "John Doe",
          email: "test@example.com",
          bio: "Hello, world!",
          image: "https://example.com/image.jpg",
        }).success
      ).toBe(true);
    });

    it("rejects an invalid user", () => {
      expect(
        userSchema.safeParse({
          id: "invalid",
          userName: "",
          email: "invalid",
          bio: null,
          image: null,
        }).success
      ).toBe(false);
    });
  });
}
