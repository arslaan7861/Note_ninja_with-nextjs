"use server";

import authOptions from "@/lib/Auth/authOPtions";
import commentSchema from "@/lib/DB/commentSchema";
import { UnauthenticatedError } from "@/lib/errors/auth";
import { getServerSession } from "next-auth";

interface propsType {
  comment: string;
  noteId: string;
}
export async function postComment({ comment, noteId }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    //*CREATE COMMENT

    // *GET OR CREATE A NEW COMMENTS OBJECT
    const commentObj =
      (await commentSchema.findOne({ noteId })) ||
      (await commentSchema.create({ noteId, comments: [] }));
    //*INSERT NEW COMMENT
    const { _id: repliesId } = await commentSchema.create({
      noteId: commentObj._id,
      comments: [
        { comment, commentator: session.user.username, time: Date.now() },
      ],
    });
    const obj = {
      comment,
      commentator: session.user.username,
      repliesId,
      time: Date.now(),
    };
    await commentObj.comments.push(obj);
    await commentObj.save();
    // await commentSchema.deleteMany({});
    //*RETURN SUCCESS MESSAGE
    return JSON.stringify({ status: 201, msg: "commented successfull" });
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, msg: "login first" });
  }
}
