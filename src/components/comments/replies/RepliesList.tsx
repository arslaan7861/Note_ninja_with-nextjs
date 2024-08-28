"use client";
import ReplyForm from "@/components/forms/ReplyForm";
import Reply from "./reply";
import { commentType } from "@/types/uploads";
import { useEffect, useState } from "react";
import { fetchReplies } from "@/lib/server-actions/comments/fetchReplies";

const RepliesList = ({
  replyId,
  noteId,
}: {
  replyId: string;
  noteId: string;
}) => {
  const [replies, setReplies] = useState<commentType[]>([] as commentType[]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const replies: commentType[] = JSON.parse(
      (await fetchReplies(replyId)) as string
    ) as commentType[];
    setReplies(replies);
  };
  return (
    <>
      <section className="w-full flex-grow px-2 flex flex-col  overflow-y-auto gap-4 custom_scrollbar">
        {replies.reverse().map((comment) => {
          return <Reply key={comment._id} commentObj={comment} />;
        })}
      </section>
      <ReplyForm fetch={fetch} repliesId={replyId} noteId={noteId} />
    </>
  );
};

export default RepliesList;
