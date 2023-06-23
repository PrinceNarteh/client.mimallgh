import { login } from "@/services/auth";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        shopCode: {
          label: "Username",
          type: "text",
          placeholder: "John Doe",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { shopCode, password } = credentials as {
          shopCode: string;
          password: string;
        };

        let user = await login({ shopCode, password });

        if (user) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: false,
};
