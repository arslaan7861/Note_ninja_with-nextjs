import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions =

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await { name: "user", id: "sdfsdfsd" };
        console.log(credentials);

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
export { handler as GET, handler as POST };
