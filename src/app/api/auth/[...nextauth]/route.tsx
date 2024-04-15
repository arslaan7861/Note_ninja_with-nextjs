import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/userSchema";
import bcrypt from "bcryptjs";
export const dynamic = "force-dynamic";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("logging", credentials);

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
        console.log("found user");
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
        console.log(user);
        return { username: "sdsdf", password: "sdfsdfdsf", id: "sdas" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
});
export { handler as GET, handler as POST };
