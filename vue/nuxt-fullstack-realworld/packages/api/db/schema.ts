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
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
});
