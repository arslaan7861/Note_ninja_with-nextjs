import BigReplycard from "@/components/comments/replies/BigReplycard";
import SmallreplyCard from "@/components/comments/replies/SmallreplyCard";
import Overlay from "@/components/wrapper/overlay";
import React from "react";
import RepliesList from "@/components/comments/replies/RepliesList";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/Auth/authOPtions";
interface propsType {
  params: {
    replyId: string;
    noteId: string;
  };
}
async function Replies({ params }: propsType) {
  const session = await getServerSession(authOptions);
  const username = session?.user.username || "";
  return (
    <Overlay>
      <>
        <BigReplycard>
          <RepliesList
            username={username}
            replyId={params.replyId}
            noteId={params.noteId}
          />
        </BigReplycard>
        <SmallreplyCard>
          <RepliesList
            username={username}
            replyId={params.replyId}
            noteId={params.noteId}
          />
        </SmallreplyCard>
      </>
    </Overlay>
  );
}
export default Replies;
