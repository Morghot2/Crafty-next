"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";

export const newVerification = async (token: string) => {
  const existingVerificationToken = await getVerificationTokenByToken(token);

  if (!existingVerificationToken) {
    return { error: "Token does not exist" };
  }

  const isTokenExpired =
    new Date(existingVerificationToken.expires) < new Date();

  if (isTokenExpired) {
    return { error: "Token is expired" };
  }

  const existingUser = await getUserByEmail(existingVerificationToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingVerificationToken.email },
  });
  await db.verificationToken.delete({
    where: { id: existingVerificationToken.id },
  });
  return { success: "Email verified" };
};
