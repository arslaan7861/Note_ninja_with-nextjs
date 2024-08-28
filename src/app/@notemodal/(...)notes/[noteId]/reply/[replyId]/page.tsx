import BigReplycard from "@/components/comments/replies/BigReplycard";
import SmallreplyCard from "@/components/comments/replies/SmallreplyCard";
import Overlay from "@/components/wrapper/overlay";
import React from "react";
import RepliesList from "@/components/comments/replies/RepliesList";
interface propsType {
  params: {
    replyId: string;
    noteId: string;
  };
}
async function Replies({ params }: propsType) {
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
