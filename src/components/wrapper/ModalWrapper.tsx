import React, { Suspense } from "react";
import Backbtn from "../buttons/Backbtn";
import Image from "next/image";

function ModalWrapper({ children }: { children: React.JSX.Element }) {
  return (
    <div className="p-4 absolute top-0 h-screen w-screen z-50 items-center justify-center flex backdrop-blur-sm">
      <Backbtn Class="absolute top-0 w-screen h-screen ">
        <></>
      </Backbtn>
      <article className="relative h-max p-6 rounded-lg w-screen lg:w-1/3 md:w-1/2 sm:w-2/3 bg-card_color shadow-lg border border-border_color flex items-center justify-center overflow-hidden">
        <Suspense fallback={<></>}>
          <Backbtn Class=" absolute top-2 right-2 w-6 p-2 aspect-square ">
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
