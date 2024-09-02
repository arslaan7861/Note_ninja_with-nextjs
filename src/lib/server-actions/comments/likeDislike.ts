"use server";
import authOptions from "@/lib/Auth/authOPtions";
import commentSchema from "@/lib/DB/commentSchema";
import { UnauthenticatedError } from "@/lib/errors/auth";
import { getServerSession } from "next-auth";
interface propsType {
  commentId: string;
  noteId: string;
  flag: "c" | "r";
}
export async function like({ noteId, commentId, flag = "c" }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    const { username } = session.user;

    // *GET COMMENTS OBJECT
    const commentObj =
      (await commentSchema.findOne({ noteId })) ||
      (await commentSchema.findById(noteId));
    // ? await commentSchema.findOne({ noteId })
    // : await commentSchema.findById(noteId);
    //* GET OLD LIKES AND DISLIKE ARRAY
    const likesarr: string[] = await commentObj.comments.id(commentId).likes;
    const dislikesarr: string[] = await commentObj.comments.id(commentId)
      .dislikes;
    //*CHECK IF ALDEADY LIKES BY THIS USER
    const liked = likesarr.includes(username);
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
    }
    const likes = commentObj.comments.id(commentId).likes;
    const dislikes = commentObj.comments.id(commentId).dislikes;
    const resp = {
      status: 201,
      liked: likes.includes(username),
      disliked: dislikes.includes(username),
      likecount: likes.length,
      dislikecount: dislikes.length,
    };
    // console.log({ likes: commentObj.comments.id(commentId).likes });
    //* SAVE CHANGES
    await commentObj.save();
    return JSON.stringify(resp);
  } catch (error) {
    console.log("error while liking", error);

    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, liked: false });
  }
}

export async function disLike({ noteId, commentId, flag = "r" }: propsType) {
  try {
    //!CHEACK USER STATUS
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError("login first");
    const { username } = session.user;

    // *GET COMMENTS OBJECT
    const commentObj =
      (await commentSchema.findOne({ noteId })) ||
      (await commentSchema.findById(noteId));
    //* GET OLD LIKES AND DISLIKE ARRAY
    const likesarr: string[] = await commentObj.comments.id(commentId).likes;
    const dislikesarr: string[] = await commentObj.comments.id(commentId)
      .dislikes;
    //*CHECK IF ALDEADY dislikes BY THIS USER
    const disliked = dislikesarr.includes(username);
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
    }
    const likes = commentObj.comments.id(commentId).likes;
    const dislikes = commentObj.comments.id(commentId).dislikes;
    const resp = {
      status: 201,
      liked: likes.includes(username),
      disliked: dislikes.includes(username),
      likecount: likes.length,
      dislikecount: dislikes.length,
    };
    // console.log({ likes: commentObj.comments.id(commentId).likes });
    //* SAVE CHANGES
    await commentObj.save();
    return JSON.stringify(resp);
  } catch (error) {
    if (error instanceof UnauthenticatedError)
      return JSON.stringify({ status: 401, disliked: false });
  }
}
