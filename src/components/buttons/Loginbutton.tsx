"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
type props = {
  provider: string;
  callbackUrl: string;
  redirect: boolean;
  bg?: string;
  btntype?: "button" | "submit";
  imgUrl: string;
};

export default function Button({
  callbackUrl,
  provider,
  redirect,
  imgUrl,
  btntype,
}: props) {
  return (
    <button
      type={btntype}
      // style={{ background: bg || "white" }}
      className="h-10 relative w-10 rounded-full shadow-2xl"
      onClick={(e) => {
        signIn(provider, { callbackUrl, redirect });
      }}
    >
      <Image
        src={imgUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        className="h-full"
        alt={provider}
      ></Image>
    </button>
  );
}
