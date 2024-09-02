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

    // *GET COMMENTS OBJECT
    const commentObj = await commentSchema.findOne({ noteId });
    //* GET OLD LIKES AND DISLIKE ARRAY
    const likesarr: string[] = await commentObj.comments.id(commentId).likes;
    const dislikesarr: string[] = await commentObj.comments.id(commentId)
      .dislikes;
    //*CHECK IF ALDEADY LIKES BY THIS USER
    const liked = likesarr.includes(username);
    const resp = { status: 201, liked: true };
    //* IF NOT LIKED ADD USER TO LIKED ARRAY
    if (!liked) {
      commentObj.comments.id(commentId).likes.push(username);
      commentObj.comments.id(commentId).dislikes = await dislikesarr.filter(
        (user) => user !== username
      );
    }
    //*ELSE REMOVE USER FROM LIKED ARRAY
    else {
      commentObj.comments.id(commentId).likes = await likesarr.filter(
        (user) => user !== username
      );
      resp.liked = false;
    }
    console.log({ likes: commentObj.comments.id(commentId).likes });
    //* SAVE CHANGES
    await commentObj.save();
    return JSON.stringify(resp);
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, liked: false });
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
    //* GET OLD LIKES AND DISLIKE ARRAY
    const likesarr: string[] = await commentObj.comments.id(commentId).likes;
    const dislikesarr: string[] = await commentObj.comments.id(commentId)
      .dislikes;
    //*CHECK IF ALDEADY dislikes BY THIS USER
    const disliked = dislikesarr.includes(username);
    const resp = { status: 201, disliked: true };
    //* IF NOT DISLIKED ADD USER TO LIKED ARRAY
    if (!disliked) {
      commentObj.comments.id(commentId).dislikes.push(username);
      commentObj.comments.id(commentId).likes = await likesarr.filter(
        (user) => user !== username
      );
    } else {
      //*ELSE REMOVE USER FROM LIKED ARRAY
      commentObj.comments.id(commentId).dislikes = await dislikesarr.filter(
        (user) => user !== username
      );
      resp.disliked = false;
    }
    console.log({ dislikes: commentObj.comments.id(commentId).dislikes });
    //* SAVE CHANGES
    await commentObj.save();
    return JSON.stringify(resp);
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, disliked: false });
  }
}
