import BigReplycard from "@/components/comments/replies/BigReplycard";
import SmallreplyCard from "@/components/comments/replies/SmallreplyCard";
import Overlay from "@/components/wrapper/overlay";
import commentSchema from "@/lib/DB/commentSchema";
import { commentType } from "@/types/uploads";
import React from "react";
import RepliesList from "@/components/comments/replies/RepliesList";
interface propsType {
  params: {
    replyId: string;
    noteId: string;
  };
}
async function Replies({ params }: propsType) {
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
          <RepliesList replyId={params.replyId} noteId={params.noteId} />
        </BigReplycard>
        <SmallreplyCard>
          <RepliesList replyId={params.replyId} noteId={params.noteId} />
        </SmallreplyCard>
      </>
    </Overlay>
  );
}
export default Replies;
