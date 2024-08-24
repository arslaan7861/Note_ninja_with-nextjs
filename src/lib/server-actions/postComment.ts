"use server";

import { throws } from "assert";
import commentSchema from "../DB/commentSchema";
import noteSchema from "../DB/noteSchema";
import authOptions from "../Auth/authOPtions";
import { getServerSession } from "next-auth";
import { UnauthenticatedError } from "../errors/auth";

interface propsType {
  comment: string;
  noteId: string;
}
export async function postComment({ comment, noteId }: propsType) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    // console.log({ comment, noteId });
    const commentObj =
      (await commentSchema.findOne({ noteId })) ||
      (await commentSchema.create({ noteId, comments: [] }));
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ error: 401 });
  }
}
