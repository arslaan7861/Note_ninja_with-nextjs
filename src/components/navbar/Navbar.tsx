import React from "react";
import CustomLink from "../buttons/CustomLink";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-screen z-40 top-0 text-txtclr shrink-0 h-16 flex items-center justify-between px-4 fixed backdrop-blur-xl">
      <h1 className="md:text-3xl sm:text-xl text-lg uppercase font-bold">
        note ninja
      </h1>
      <div className="flex h-min gap-4 px-4">
        <CustomLink path="/">home</CustomLink>
        {!session && <CustomLink path="/auth/signin">signin</CustomLink>}
        {session && <CustomLink path="/profile">profile</CustomLink>}
        <CustomLink path="/notes">notes</CustomLink>
         <CustomLink path={session?'/uploads':'/auth/signin?msg=please login first'}>uploads</CustomLink>
      </div>
    </nav>
  );
}

export default Navbar;
