import Image from "next/image";
import { DislikeButton, LikeButton } from "../buttons/LikeDislike";
import Link from "next/link";

async function Comments({id}:{id:string}) {
  console.log({id});
  
  return (
    <>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
}

export function Comment() {

  async function like({st}:{st:string}) {
    "use server"
    console.log("liked comment");
  }
   async function dislike({ st }: { st: string }) {
     "use server";
     console.log("disliked comment");
   }


  return (
    <div className="w-full h-min shadow-md rounded-md flex p-3 gap-3">
      <article className="bg-contatiner_color h-20 aspect-square rounded-full"></article>
      <article className="flex-grow h-min flex flex-col gap-3 border ">
        <h4 className="flex gap-2 items-center">
          <span className="">@{"username"}</span>
          <span className=" text-sm text-contatiner_color">{"1h ago"}</span>
        </h4>
        <p className="h-min w-full max-h-48 overflow-auto custom_scrollbar">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi magnam
          cupiditate, dolor ducimus facilis incidunt illo sed culpa. Architecto
          magni itaque tenetur laudantium perspiciatis a, dolor id quasi
          molestiae nihil.
        </p>
        <div className="w-full h-8 flex gap-4">
          <LikeButton fn={like} />
          <DislikeButton fn={dislike} />
          <Link href={"/notes/asd/reply/comID"} className="text-blue-600 font-bold">Reply</Link>
        </div>
      </article>
    </div>
  );
}

export default Comments;
