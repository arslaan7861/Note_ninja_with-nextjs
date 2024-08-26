import BigReplycard from "@/components/comments/replies/BigReplycard";
import SmallreplyCard from "@/components/comments/replies/SmallreplyCard";
import Overlay from "@/components/wrapper/overlay";
import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/uploads";
import { Metadata } from "next";
import React from "react";
import Reply from "@/components/comments/replies/reply";
import ReplyForm from "@/components/forms/ReplyForm";
interface propsType {
  params: {
    replyId: string;
    noteId: string;
  };
}
async function Replies({ params }: propsType) {
  console.log(params);
  const {
    comments: replies,
  }: {
    comments: commentType[];
  } = (await commentSchema.findById(params.replyId)) || {
    comments: [],
  };

  return (
    <Overlay>
      <>
        <BigReplycard>
          <RepliesList replies={replies} params={params} />
        </BigReplycard>
        <SmallreplyCard>
          <RepliesList replies={replies} params={params} />
        </SmallreplyCard>
      </>
    </Overlay>
  );
}

const RepliesList = ({
  params,
  replies,
}: {
  replies: commentType[];
  params: {
    replyId: string;
    noteId: string;
  };
}) => {
  return (
    <>
      <section className="w-full flex-grow px-2 flex flex-col  overflow-y-auto gap-4 custom_scrollbar">
        {replies.reverse().map((comment) => {
          return <Reply key={comment._id} commentObj={comment} />;
        })}
      </section>
      <ReplyForm repliesId={params.replyId} noteId={params.noteId} />
    </>
  );
};

export default Replies;
