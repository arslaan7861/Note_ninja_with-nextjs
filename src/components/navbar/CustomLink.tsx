"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
type proptype = {
  path: string;
  children: ReactNode;
};

function CustomLink({ path, children }: proptype) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={
        pathname !== path
          ? "text-sm md:text-md hover:scale-110 font-semibold uppercase"
          : "hidden"
      }
    >
      {children}
    </Link>
  );
}

export default CustomLink;
