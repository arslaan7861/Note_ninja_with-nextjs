"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";
interface propsType {
  params: {
    replyId: string;
    noteId: string;
  };
}
function Replies({ params }: propsType) {
  const router = useRouter();
  console.log("redirecting");
  useLayoutEffect(() => {
    router.push(`/notes/${params.noteId}`);
  }, []);
  return <></>;
}

export default Replies;
