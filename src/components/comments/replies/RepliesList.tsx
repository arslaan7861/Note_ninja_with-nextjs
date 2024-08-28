"use client";
import ReplyForm from "@/components/forms/ReplyForm";
import Reply from "./reply";
import { commentType } from "@/types/uploads";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchReplies } from "@/lib/server-actions/comments/fetchReplies";
import Spinner from "@/components/loaders/spinner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const RepliesList = ({
  replyId,
  noteId,
}: {
  replyId: string;
  noteId: string;
}) => {
  //!ADD GSAP ANIMATION
  useGSAP(() => {
    gsap.fromTo(
      "#smallReplies",
      {
        y: 100,
      },
      {
        y: 0,
      }
    );
  });
  const [replies, setReplies] = useState<commentType[] | null>(null);
  // const scrollPointer = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      const replies: commentType[] =
        JSON.parse((await fetchReplies(replyId)) as string) ||
        ([] as commentType[]);

      setReplies(replies);
      // scrollPointer.current?.scrollIntoView();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <section className="w-full flex-grow px-2 flex flex-col items-center justify-center overflow-y-auto gap-4 custom_scrollbar pt-2">
          {!replies && <Spinner />}
          {replies &&
            replies.reverse().map((comment) => {
              return <Reply key={comment._id} commentObj={comment} />;
            })}
        </section>
        {/* <span ref={scrollPointer}></span> */}
      </Suspense>
      <ReplyForm fetch={fetch} repliesId={replyId} noteId={noteId} />
    </>
  );
};

export default RepliesList;
