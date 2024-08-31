import { DislikeButton, LikeButton } from "../buttons/commetLike";
import Link from "next/link";
import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/uploads";

async function Comments({ id }: { id: string }) {
  console.log({ id });
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
        return <Comment key={comment._id} commentObj={comment} noteId={id} />;
      })}
    </>
  );
}

export function Comment({
  commentObj,
  noteId,
}: {
  commentObj: commentType;
  noteId: string;
}) {
  const { comment, commentator, dislikes, likes, repliesId, _id } = commentObj;

  return (
    <div className="w-full h-min shadow-md rounded-md flex p-3 gap-3 bg-card_color">
      <article className="bg-contatiner_color h-14 aspect-square rounded-full"></article>
      <article className="flex-grow h-min flex flex-col gap-3">
        <h4 className="flex gap-2 items-center text-sm text-blue-600">
          @{commentator}
          <span className="text-xs h-full text-contatiner_color">
            {"1h ago"}
          </span>
        </h4>
        <p className="h-min w-full max-h-48 overflow-auto custom_scrollbar">
          {comment}
        </p>
        <footer className="w-full h-5 sm:h-6 flex items-center gap-4">
          <LikeButton
            likesCount={likes.length}
            liked
            noteId={noteId}
            commentId={_id.toString()}
          />
          <DislikeButton
            noteId={noteId}
            dislikesCount={dislikes.length}
            disliked
            commentId={_id.toString()}
          />
          <Link
            href={`/notes/${noteId}/reply/${repliesId}`}
            className="text-blue-600 text-xs sm:text-sm font-bold"
          >
            Reply
          </Link>
        </footer>
      </article>
    </div>
  );
}

export default Comments;
