import Link from "next/link";
import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/types";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";
import LikeDislikebtn from "../buttons/LikeDislikebtn";
import getTime from "./getTime";
import getCommentCOunt from "@/lib/server-actions/comments/getCommentCount";

async function Comments({ id }: { id: string }) {
  const session = await getServerSession(authOptions);
  const username = session?.user.username || "";
  const {
    replied,
    comments,
  }: {
    replied: boolean;
    comments: commentType[];
  } = (await commentSchema.findOne({ noteId: id })) || {
    replied: false,
    comments: [],
  };

  return (
    <>
      {comments.reverse().map((comment) => {
        return (
          <Comment
            username={username}
            key={comment._id}
            commentObj={comment}
            noteId={id}
          />
        );
      })}
    </>
  );
}

export async function Comment({
  commentObj,
  noteId,
  username,
}: {
  commentObj: commentType;
  noteId: string;
  username: string;
}) {
  const { comment, commentator, dislikes, likes, repliesId, _id, time } =
    commentObj;
  const replyCount = await getCommentCOunt(repliesId, "c");
  return (
    <div className="w-full h-min shadow-md rounded-md flex p-3 gap-3 bg-card_color">
      <article className="bg-contatiner_color h-14 aspect-square rounded-full"></article>
      <article className="flex-grow h-min flex flex-col gap-3">
        <h4 className="flex gap-2 items-center text-sm text-blue-400">
          @{commentator}
          <span className="text-xs h-full text-contatiner_color">
            {getTime(time)}
          </span>
        </h4>
        <p className="h-min w-full max-h-48 overflow-auto custom_scrollbar">
          {comment}
        </p>
        <footer className="w-full h-5 sm:h-6 flex items-center gap-4">
          <LikeDislikebtn
            likecount={likes.length}
            liked={likes.includes(username)}
            noteId={noteId}
            commentId={_id.toString()}
            dislikecount={dislikes.length}
            disliked={dislikes.includes(username)}
          />
          <Link
            href={`/notes/${noteId}/reply/${repliesId}`}
            className="text-blue-400 text-xs sm:text-sm font-bold"
          >
            {replyCount != "0" ? (
              <>
                replies <span>{replyCount}</span>
              </>
            ) : (
              "reply"
            )}
          </Link>
        </footer>
      </article>
    </div>
  );
}

export default Comments;
