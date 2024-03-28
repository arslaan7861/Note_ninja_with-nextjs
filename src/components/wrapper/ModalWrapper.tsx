import Link from "next/link";
import React, { Suspense } from "react";
import Backbtn from "./Backbtn";

function ModalWrapper({
  children,
  parentPath,
}: {
  children: React.JSX.Element;
  parentPath: string;
}) {
  return (
    <div className="backdrop-blur-sm p-4 absolute top-0 h-screen w-screen z-50 items-center justify-center flex ">
      <article className="h-1/2 relative shadow-md  sm:h-2/3 w-10/12 rounded-lg sm:w-1/2 bg-white flex items-center justify-center">
        <Suspense fallback={<></>}>
          <Backbtn Class=" absolute top-0 right-0 h-min p-2 aspect-square ">
            <img
              src="icons/cross.svg"
              className="h-4 sm:h-6 aspect-square"
              alt=""
            />
          </Backbtn>
        </Suspense>
        {children}
      </article>
    </div>
  );
}

export default ModalWrapper;
