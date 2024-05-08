import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import User from "@/lib/DB/userSchema";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/DB/connectDB";
import GithubProvider from "next-auth/providers/github";
import GithubRegister from "./githubRegister";
import GoogleProvider from "next-auth/providers/google";
import googleRegister from "./googleRegister";
import { JWT } from "next-auth/jwt";
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();

        if (!credentials) {
          throw new Error("provide proper credentials");
        }
        const user = await User.findOne({ username: credentials?.username });

        if (!user) {
          console.log("user not found");
          const err = JSON.stringify({
            message: "User not found",
            path: "username",
          });
          throw new Error(err);
        }
        const PasswordMatches = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!PasswordMatches) {
          console.log("wrong password");
          const err = JSON.stringify({
            message: "Password incorrect",
            path: "password",
          });
          throw new Error(err);
        }
        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      async profile(profile) {
        return await GithubRegister(profile);
        return profile;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === "google" && profile) {
        await connectDB();
        profile = await googleRegister(profile);
      }
      return true;
    },
    async jwt({ token, account, profile, user: credUser }) {
      if (account?.provider) {
        token.provider = account.provider;
      }
      if (account?.provider == "credentials")
        console.log({ credsToken: token });

      await connectDB();
      if (token.provider === "google") {
        const user = await User.findOne({
          email: profile?.email || token.email,
        });
        token.id = user._id;
      } else {
        const user = await User.findById(profile?.sub || token.sub);
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log({ sessionToken: token.id });
      await connectDB();
      const user = await User.findById(token.id);
      session.user = {
        username: user?.username,
        email: user?.email,
        name: user.fullname,
        image: user.image,
        id: user._id,
      };

      return session;
    },
  },
};

export default authOptions;
