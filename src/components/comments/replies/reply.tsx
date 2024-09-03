import LikeDislikebtn from "@/components/buttons/LikeDislikebtn";
import { commentType } from "@/types/uploads";
import React from "react";
import getTime from "../getTime";

function Reply({
  commentObj,
  username,
  noteId,
}: {
  commentObj: commentType;
  username: string;
  noteId: string;
}) {
  const { comment, commentator, dislikes, likes, _id, time } = commentObj;
  return (
    <div className="w-full h-min shadow-md rounded-md flex p-3 gap-3 bg-card_color">
      <article className="bg-contatiner_color h-14 aspect-square rounded-full"></article>
      <article className="flex-grow h-min flex flex-col gap-3">
        <h4 className="flex gap-2 items-center text-sm text-blue-600">
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
        </footer>
      </article>
    </div>
  );
}

export default Reply;
