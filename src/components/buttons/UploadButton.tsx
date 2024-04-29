import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Upload() {
  return (
    <Link href='/uploads/upload' className="h-12 absolute w-12 bottom-12 right-12 rounded-full bg-black text-white"><Image
              src="/icons/upload.svg"
              alt="Picture of the author"
              layout="fill"
              className="p-2 text-white"
            /></Link>
  );
}