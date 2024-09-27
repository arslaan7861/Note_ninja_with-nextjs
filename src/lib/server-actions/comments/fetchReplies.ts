"use server";
import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/types";

export async function fetchReplies(replyId: string) {
  try {
    const {
      comments: replies,
    }: {
      comments: commentType[];
    } = (await commentSchema.findById(replyId)) || {
      comments: [],
    };
    return JSON.stringify(replies);
  } catch (error) {}
}
