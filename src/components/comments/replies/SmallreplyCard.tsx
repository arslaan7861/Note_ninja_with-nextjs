"use client";
import React from "react";

function SmallreplyCard({ children }: { children: React.JSX.Element }) {
  return (
    <section
      id="smallReplies"
      className=" bg-bg_primary border shadow-lg rounded-t-xl sm:hidden absolute bottom-0 w-screen h-max max-h-[80%] pb-4 flex flex-col gap-2"
    >
      <header className="w-full p-2 flex flex-col border-0 border-b border-gray-300 justify-center items-center rounded-t-full gap-2">
        <span className="w-8 h-1 bg-secondary_text rounded-full"></span>
        <h4 className="uppercase font-semibold tracking-wide">reply</h4>
      </header>
      {children}
    </section>
  );
}

export default SmallreplyCard;
