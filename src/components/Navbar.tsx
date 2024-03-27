import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-screen z-40 top-0 text-txtclr shrink-0 h-16 flex items-center justify-between px-4 fixed backdrop-blur-xl">
      <h1 className="md:text-3xl sm:text-xl text-lg uppercase font-bold">
        note ninja
      </h1>
      <div>
        <Link
          href={"/profile"}
          className="text-sm md:text-md hover:scale-110 font-semibold uppercase"
        >
          profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
