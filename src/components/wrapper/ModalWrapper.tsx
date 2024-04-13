import React, { Suspense } from "react";
import Backbtn from "../buttons/Backbtn";
import Image from "next/image";

function ModalWrapper({ children }: { children: React.JSX.Element }) {
  return (
    <div className="backdrop-blur-sm p-4 absolute top-0 h-screen w-screen z-50 items-center justify-center flex ">
      <article className="h-1/2 border border-black  relative sm:h-2/3 w-10/12 rounded-lg sm:w-1/2 bg-white flex items-center justify-center">
        <Suspense fallback={<></>}>
          <Backbtn Class=" absolute top-1 right-1 w-7 p-2 aspect-square ">
            <Image
              src="/icons/cross.svg"
              alt="Picture of the author"
              layout="fill"
            />
          </Backbtn>
        </Suspense>
        {children}
      </article>
    </div>
  );
}

export default ModalWrapper;
