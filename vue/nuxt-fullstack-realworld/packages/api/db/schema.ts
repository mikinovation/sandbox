import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  image: text("image"),
  bio: text("bio"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});
