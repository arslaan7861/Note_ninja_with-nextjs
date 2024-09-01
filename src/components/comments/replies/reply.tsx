import { DislikeButton, LikeButton } from "@/components/buttons/commetLike";
import { commentType } from "@/types/uploads";
import React from "react";

function Reply({
  commentObj,
  username,
}: {
  commentObj: commentType;
  username: string;
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
            liked={likes.includes(username)}
            likesCount={likes.length}
            commentId={_id.toString()}
            noteId={repliesId}
          />
          <DislikeButton
            disliked={dislikes.includes(username)}
            dislikesCount={dislikes.length}
            commentId={_id.toString()}
            noteId={repliesId}
          />
        </footer>
      </article>
    </div>
  );
}

export default Reply;
