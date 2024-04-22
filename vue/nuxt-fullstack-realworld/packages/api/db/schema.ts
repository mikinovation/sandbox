import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

const idSchema = uuid("id").defaultRandom().notNull().primaryKey();

const timestamptz = (columnName: string) =>
  timestamp(columnName, { withTimezone: true });

const createdAtSchema = timestamptz("created_at").defaultNow().notNull();

const updatedAtSchema = timestamptz("updated_at").defaultNow().notNull();

export const users = pgTable("users", {
  id: idSchema,
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  image: text("image"),
  bio: text("bio"),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const follows = pgTable("follows", {
  id: idSchema,
  followerId: uuid("follower_id")
    .notNull()
    .references(() => users.id),
  followingId: uuid("following_id")
    .notNull()
    .references(() => users.id),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const articles = pgTable("articles", {
  id: idSchema,
  slug: text("slug").unique().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  body: text("body").notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const tags = pgTable("tags", {
  id: idSchema,
  name: text("name").unique().notNull(),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const articleTags = pgTable("article_tags", {
  id: idSchema,
  articleId: uuid("article_id")
    .notNull()
    .references(() => articles.id),
  tagId: uuid("tag_id")
    .notNull()
    .references(() => tags.id),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const favorites = pgTable("favorites", {
  id: idSchema,
  userId: uuid("user_id"),
  articleId: uuid("article_id"),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});

export const comments = pgTable("comments", {
  id: idSchema,
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  articleId: uuid("article_id")
    .notNull()
    .references(() => articles.id),
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});
