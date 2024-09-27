"use server";

import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/types";

export default async function getCommentCOunt(noteId: string, flag: "c" | "n") {
  if (flag == "n") {
    const commentObj = await commentSchema.findOne({ noteId });
    const l = commentObj.comments.length;
    return `${l}`;
  } else {
    const {
      comments: replies,
    }: {
      comments: commentType[];
    } = (await commentSchema.findById(noteId)) || {
      comments: [],
    };
    return `${replies.length - 1}`;
  }
}
