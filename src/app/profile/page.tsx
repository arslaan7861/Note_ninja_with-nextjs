import CustomLink from "@/components/buttons/CustomLink";
import authOptions from "@/lib/Auth/authOPtions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div className="h-svh w-screen flex items-center flex-col justify-center ">
      <p>{JSON.stringify(user)}</p>
      <CustomLink path="/api/auth/signout">logout</CustomLink>
    </div>
  );
}

export default ProfilePage;
