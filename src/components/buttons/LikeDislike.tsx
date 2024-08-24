"use client";
import Image from "next/image";
import React from "react";

export function DislikeButton({ fn }: { fn: ({st}:{st:string}) => Promise<void> }) {
  return (
    <button onClick={() => fn({st:""})} className="h-full text-gray-500">
      <Image
        src="/icons/dislike.svg"
        alt="Picture of the author"
        width={32}
        height={32}
      />
    </button>
  );
}
export function LikeButton({ fn }: { fn: ({ st }: { st: string }) => Promise<void> }) {
  return (
    <button onClick={() => fn({ st: "" })} className="h-full text-gray-500">
      <Image
        src="/icons/like.svg"
        alt="Picture of the author"
        width={32}
        height={32}
      />
    </button>
  );
}
