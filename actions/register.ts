"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "../src/lib/db";
import { RegisterSchema } from "schemas";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return { error: "User already exists" };
  }
  console.log(hashedPassword);
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return { success: "User created!" };
};
