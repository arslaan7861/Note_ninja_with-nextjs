import React, { Suspense } from "react";
import Backbtn from "../buttons/Backbtn";
import Image from "next/image";

function Overlay({ children }: { children: React.JSX.Element }) {
  return (
    <div className="p-4 bg-transBlack2 absolute top-0 h-svh w-screen z-50 items-center justify-center flex backdrop-blur-sm">
      <Backbtn Class="absolute top-0 w-screen h-svh ">
        <></>
      </Backbtn>
      {children}
    </div>
  );
}

export default Overlay;
