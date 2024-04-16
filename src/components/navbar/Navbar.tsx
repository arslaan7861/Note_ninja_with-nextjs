// "use client";
import React from "react";
import CustomLink from "./CustomLink";
import SigninProfile from "./SigninProfile";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="w-screen z-40 top-0 text-txtclr shrink-0 h-16 flex items-center justify-between px-4 fixed backdrop-blur-xl">
      <h1 className="md:text-3xl sm:text-xl text-lg uppercase font-bold">
        note ninja
      </h1>
      <div className="flex h-min gap-4 px-4">
        <CustomLink path="/">home</CustomLink>
        {!session && <CustomLink path="auth/signin">signin</CustomLink>}
        {session && <CustomLink path="api/auth/signout">logout</CustomLink>}
        <CustomLink path="/notes">notes</CustomLink>
      </div>
    </nav>
  );
}

export default Navbar;
