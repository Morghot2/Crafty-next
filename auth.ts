/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});
