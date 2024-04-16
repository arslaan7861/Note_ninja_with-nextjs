import authOptions from "@/lib/Auth/authOPtions";
import NextAuth from "next-auth";

export const dynamic = "force-dynamic";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
