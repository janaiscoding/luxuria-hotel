import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
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
        const { rows } =
          await sql`SELECT * FROM users WHERE email=${credentials?.email} AND password=${credentials?.password};`;
        if (rows) {
          return rows[0];
        }

        return null;
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Demo Account",
      //@ts-ignore
      async authorize(credentials, req) {
        try {
          const { rows } =
            await sql`SELECT * FROM users WHERE email='myemail@mail.com' AND password='mypw';`;
          if (rows) {
            return rows[0];
          }
        } catch {
          return null;
        }
      },
    }),
  ],
};
