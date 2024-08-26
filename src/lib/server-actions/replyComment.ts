"use server";
import commentSchema from "../DB/commentSchema";
import authOptions from "../Auth/authOPtions";
import { getServerSession } from "next-auth";
import { UnauthenticatedError } from "../errors/auth";

interface propsType {
  comment: string;
  repliesId: string;
}
export async function replyComment({ comment, repliesId }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");

    // *GET OR CREATE A NEW COMMENTS OBJECT
    const commentObj = await commentSchema.findById(repliesId);
    //*CREATE COMMENT
    const obj = {
      comment,
      commentator: session.user.username,
      likes: 0,
      dislikes: 0,
    };
    //*INSERT COMMENT
    await commentObj.comments.push(obj);
    await commentObj.save();
    //*RETURN SUCCESS MESSAGE
    return JSON.stringify({ status: 201, msg: "commented successfully" });
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, msg: "login first" });
  }
}
