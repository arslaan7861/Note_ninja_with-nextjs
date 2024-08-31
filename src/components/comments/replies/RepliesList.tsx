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
  const repliesContaner = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      const replies: commentType[] =
        JSON.parse((await fetchReplies(replyId)) as string) ||
        ([] as commentType[]);
      setReplies(replies);
      setTimeout(() => {
        if (repliesContaner.current)
          repliesContaner.current.lastElementChild?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
      }, 200);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <section
        ref={repliesContaner}
        className="w-full flex-grow px-2 flex flex-col items-center overflow-y-auto gap-4 custom_scrollbar scroll-smooth"
      >
        {!replies && <Spinner />}
        {replies &&
          replies.map((comment) => {
            return <Reply key={comment._id} commentObj={comment} />;
          })}
        <span></span>
      </section>
      <ReplyForm fetch={fetch} repliesId={replyId} noteId={noteId} />
    </>
  );
};

export default RepliesList;
