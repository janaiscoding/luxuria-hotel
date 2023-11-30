import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { sql } from "@vercel/postgres";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      //@ts-ignore
      async authorize(credentials, req) {
        const password = credentials!.password;
        const email = credentials!.email;

        const { rows: user } =
          await sql`SELECT * FROM users WHERE email=${email}`;

        const isAuth = await bcryptjs.compare(password, user[0].password);
        
        if (!isAuth) return null;
        return user[0];
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
