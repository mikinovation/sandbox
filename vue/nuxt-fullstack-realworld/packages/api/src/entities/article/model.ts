import { object, string, boolean, number } from "zod";

export const slugSchema = string().min(1).max(100);

export const titleSchema = string().min(1).max(100);

export const descriptionSchema = string().min(1);

export const bodySchema = string().min(1);

export const tagSchema = string().min(1);

export const favoritedSchema = boolean();

export const favoritesCountSchema = number().int().nonnegative();

// TODO: Add author schema to another model
const authorSchema = object({
  username: string(),
  bio: string().nullable(),
  image: string().nullable(),
  following: boolean(),
});

const createdAtSchema = string().datetime();

const updatedAtSchema = string().datetime();

const articlesCountSchema = number().int().nonnegative();

export const getArticleParamSchema = object({
  slug: string(),
});

export const getArticlesQuerySchema = object({
  tag: string(),
  author: string(),
  favorited: string(),
  limit: number().int().nonnegative(),
  offset: number().int().nonnegative(),
}).partial();

export const getFeedQuerySchema = object({
  limit: number().int().nonnegative(),
  offset: number().int().nonnegative(),
}).partial();

export const createArticleInputSchema = object({
  article: object({
    title: titleSchema,
    description: descriptionSchema,
    body: bodySchema,
    tagList: tagSchema.array(),
  }),
});

export const getArticleResponseSchmea = object({
  article: object({
    slug: slugSchema,
    title: titleSchema,
    description: descriptionSchema,
    body: bodySchema,
    tagList: tagSchema.array(),
    favorited: favoritedSchema,
    favoritesCount: favoritesCountSchema,
    author: authorSchema,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
  }),
});

export const getArticlesResponseSchema = object({
  articles: object({
    slug: slugSchema,
    title: titleSchema,
    description: descriptionSchema,
    body: bodySchema,
    tagList: tagSchema.array(),
    favorited: favoritedSchema,
    favoritesCount: favoritesCountSchema,
    author: authorSchema,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
  }).array(),
  articlesCount: articlesCountSchema,
});

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("slugSchema", () => {
    it("should validate a valid slug", () => {
      expect(slugSchema.safeParse("testslug").success).toBe(true);
    });

    it("should not validate an empty slug", () => {
      expect(slugSchema.safeParse("").success).toBe(false);
    });
  });

  describe("titleSchema", () => {
    it("should validate a valid title", () => {
      expect(titleSchema.safeParse("Hello World").success).toBe(true);
    });

    it("should not validate an empty title", () => {
      expect(titleSchema.safeParse("").success).toBe(false);
    });

    it("should not validate a title longer than 100 characters", () => {
      expect(titleSchema.safeParse("a".repeat(101)).success).toBe(false);
    });
  });

  describe("descriptionSchema", () => {
    it("should validate a valid description", () => {
      expect(descriptionSchema.safeParse("Hello World").success).toBe(true);
    });

    it("should not validate an empty description", () => {
      expect(descriptionSchema.safeParse("").success).toBe(false);
    });
  });

  describe("bodySchema", () => {
    it("should validate a valid body", () => {
      expect(bodySchema.safeParse("Hello World").success).toBe(true);
    });

    it("should not validate an empty body", () => {
      expect(bodySchema.safeParse("").success).toBe(false);
    });
  });

  describe("tagSchema", () => {
    it("should validate a valid tag", () => {
      expect(tagSchema.safeParse("Hello World").success).toBe(true);
    });

    it("should not validate an empty tag", () => {
      expect(tagSchema.safeParse("").success).toBe(false);
    });
  });

  describe("favoritedSchema", () => {
    it("should validate a valid favorited", () => {
      expect(favoritedSchema.safeParse(true).success).toBe(true);
    });

    it("should not validate an invalid favorited", () => {
      expect(favoritedSchema.safeParse("true").success).toBe(false);
    });
  });

  describe("favoritesCountSchema", () => {
    it("should validate a valid favoritesCount", () => {
      expect(favoritesCountSchema.safeParse(10).success).toBe(true);
    });

    it("should not validate a non-integer favoritesCount", () => {
      expect(favoritesCountSchema.safeParse(1.5).success).toBe(false);
    });

    it("should not validate an invalid favoritesCount", () => {
      expect(favoritesCountSchema.safeParse(-1).success).toBe(false);
    });
  });

  describe("articlesCountSchema", () => {
    it("should validate a valid articlesCount", () => {
      expect(articlesCountSchema.safeParse(10).success).toBe(true);
    });

    it("should not validate a non-integer articlesCount", () => {
      expect(articlesCountSchema.safeParse(1.5).success).toBe(false);
    });

    it("should not validate an invalid articlesCount", () => {
      expect(articlesCountSchema.safeParse(-1).success).toBe(false);
    });
  });

  describe("authorSchema", () => {
    it("should validate a valid author", () => {
      expect(
        authorSchema.safeParse({
          username: "testuser",
          bio: "test bio",
          image: "test image",
          following: true,
        }).success
      ).toBe(true);
    });

    it("should not validate an invalid author", () => {
      expect(
        authorSchema.safeParse({
          username: "testuser",
          bio: "test bio",
          image: "test image",
          following: "true",
        }).success
      ).toBe(false);
    });
  });

  describe("createdAtSchema", () => {
    it("should validate a valid createdAt", () => {
      expect(
        createdAtSchema.safeParse("2021-01-01T00:00:00.000Z").success
      ).toBe(true);
    });

    it("should not validate an invalid createdAt", () => {
      expect(createdAtSchema.safeParse("test").success).toBe(false);
    });
  });

  describe("createArticleParamsSchema", () => {
    it("should validate a valid article", () => {
      expect(
        createArticleParamsSchema.safeParse({
          article: {
            title: "test title",
            description: "test description",
            body: "test body",
            tagList: ["test", "tags"],
          },
        }).success
      ).toBe(true);
    });

    it("should not validate an invalid article", () => {
      expect(
        createArticleParamsSchema.safeParse({
          article: {
            title: "",
          },
        }).success
      ).toBe(false);
    });
  });

  describe("getArticleResponseSchema", () => {
    it("should validate a valid article", () => {
      expect(
        getArticleResponseSchema.safeParse({
          article: {
            slug: "test-slug",
            title: "test title",
            description: "test description",
            body: "test body",
            tagList: ["test", "tags"],
            favorited: true,
            favoritesCount: 10,
            author: {
              username: "testuser",
              bio: "test bio",
              image: "test image",
              following: true,
            },
            createdAt: "2021-01-01T00:00:00.000Z",
            updatedAt: "2021-01-01T00:00:00.000Z",
          },
        }).success
      ).toBe(true);
    });

    it("should not validate an invalid article", () => {
      expect(
        getArticleResponseSchema.safeParse({
          article: {
            slug: "",
          },
        }).success
      ).toBe(false);
    });
  });
}
