import React from "react";

function CommentSkeletons() {
  return (
    <>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  );
}

export function CommentSkeleton() {
  return (
    <div className="w-full h-min bg-card_color shadow-md text-contatiner_color rounded-md flex p-3 gap-3">
      <article className="bg-contatiner_color animate-pulse h-20 aspect-square rounded-full"></article>
      <article className="flex-grow h-min flex flex-col gap-3">
        <h4>
          <span className="bg-contatiner_color rounded-full animate-pulse">
            {"____________"}
          </span>
          <span className="bg-contatiner_color ml-3 text-sm rounded-full animate-pulse">
            {"__________"}
          </span>
        </h4>
        <p className="h-16 bg-contatiner_color animate-pulse rounded-md w-full max-h-48 overflow-auto custom_scrollbar"></p>
        <div className="w-full h-8 bg-contatiner_color animate-pulse rounded-md"></div>
      </article>
    </div>
  );
}

export default CommentSkeletons;
