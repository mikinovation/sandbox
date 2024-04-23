import { object, string } from "zod";

const usernameSchema = string().min(1);

const emailSchema = string().min(1).email();

const passwordSchema = string().min(1);

const bioSchema = string().nullable();

const imageSchema = string().nullable();

const tokenSchema = string().min(1);

export const userSchema = object({
  email: emailSchema,
  token: tokenSchema,
  username: usernameSchema,
  bio: bioSchema,
  image: imageSchema,
});

export const registerationInputSchema = object({
  user: object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
  }),
});

export const loginInputSchema = object({
  user: object({
    email: emailSchema,
    password: passwordSchema,
  }),
});

export const updateUserInputSchema = object({
  user: object({
    email: emailSchema.optional(),
    username: usernameSchema.optional(),
    password: passwordSchema.optional(),
    bio: bioSchema.optional(),
    image: imageSchema.optional(),
  }),
});
