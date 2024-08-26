"use client";
import Image from "next/image";
import React from "react";

export function DislikeButton({
  fn,
}: {
  fn: ({ st }: { st: string }) => Promise<void>;
}) {
  return (
    <button
      onClick={() => fn({ st: "" })}
      className="h-full aspect-square relative"
    >
      <Image src="/icons/dislike.svg" alt="Picture of the author" fill />
    </button>
  );
}
export function LikeButton({
  fn,
}: {
  fn: ({ st }: { st: string }) => Promise<void>;
}) {
  return (
    <button
      onClick={() => fn({ st: "" })}
      className="h-full aspect-square relative"
    >
      <Image src="/icons/like.svg" alt="Picture of the author" fill />
    </button>
  );
}
