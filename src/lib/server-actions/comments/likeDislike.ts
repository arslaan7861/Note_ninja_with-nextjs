"use server";
import authOptions from "@/lib/Auth/authOPtions";
import commentSchema from "@/lib/DB/commentSchema";
import { UnauthenticatedError } from "@/lib/errors/auth";
import { getServerSession } from "next-auth";
interface propsType {
  commentId: string;
  noteId: string;
}
export async function like({ noteId, commentId }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    const { username } = session.user;

    // *GET OR CREATE A NEW COMMENTS OBJECT
    const commentObj = await commentSchema.findOne({ noteId });
    //* GET OLD LIKES ARAY
    const likesarr: string[] = await commentObj.comments.id(commentId).likes;
    //*CHECK IF ALDEADY LIKES BY THIS USER
    const liked = likesarr.includes(username);
    //* IF NOT LIKED ADD USER TO LIKED ARRAY
    if (!liked) commentObj.comments.id(commentId).likes.push(username);
    //*ELSE REMOVE USER FROM LIKED ARRAY
    else
      commentObj.comments.id(commentId).likes = await likesarr.filter(
        (user) => user !== username
      );
    console.log({ likes: commentObj.comments.id(commentId).likes });
    //* SAVE CHANGES
    await commentObj.save();
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, msg: "login first" });
  }
}

export async function disLike({ noteId, commentId }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    const { username } = session.user;

    // *GET OR CREATE A NEW COMMENTS OBJECT
    const commentObj = await commentSchema.findOne({ noteId });
    //* GET OLD LIKES ARAY
    const dislikesarr: string[] = await commentObj.comments.id(commentId)
      .dislikes;
    //*CHECK IF ALDEADY dislikes BY THIS USER
    const liked = dislikesarr.includes(username);
    //* IF NOT LIKED ADD USER TO LIKED ARRAY
    if (!liked) commentObj.comments.id(commentId).dislikes.push(username);
    //*ELSE REMOVE USER FROM LIKED ARRAY
    else
      commentObj.comments.id(commentId).dislikes = await dislikesarr.filter(
        (user) => user !== username
      );
    console.log({ dislikes: commentObj.comments.id(commentId).dislikes });
    //* SAVE CHANGES
    await commentObj.save();
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, msg: "login first" });
  }
}
