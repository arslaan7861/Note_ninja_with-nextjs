import Backbtn from "@/components/buttons/Backbtn";
import Image from "next/image";
import React, { Suspense } from "react";

function BigReplycard({ children }: { children: React.JSX.Element }) {
  return (
    <article className="hidden sm:flex  relative h-5/6 gap-2 py-2 rounded-lg w-screen lg:w-1/3 md:w-1/2 sm:w-2/3 bg-bg_primary shadow-lg border border-border_color flex-col items-center justify-center overflow-hidden">
      <Suspense fallback={<></>}>
        <h4 className="uppercase w-full relative text-center px-2">
          reply
          <Backbtn Class=" absolute right-1 w-6 p-2 aspect-square ">
            <Image
              src="/icons/cross.svg"
              alt="Picture of the author"
              layout="fill"
            />
          </Backbtn>
        </h4>
      </Suspense>
      {children}
    </article>
  );
}

export default BigReplycard;
