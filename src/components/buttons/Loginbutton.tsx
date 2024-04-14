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
  bg,
  btntype,
}: props) {
  return (
    <button
      type={btntype}
      style={{ background: bg || "white" }}
      className="h-12 w-36 relative justify-evenly flex items-center p-2 shadow-2xl"
      onClick={(e) => {
        signIn(provider, { callbackUrl, redirect });
      }}
    >
      <span className="relative h-full aspect-square">
        <Image
          src={imgUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt={provider}
        ></Image>
      </span>
      <p
        style={{ color: bg ? "white" : "black" }}
        className="flex-grow uppercase h-min font-bold text-lg"
      >
        {provider}
      </p>
    </button>
  );
}
