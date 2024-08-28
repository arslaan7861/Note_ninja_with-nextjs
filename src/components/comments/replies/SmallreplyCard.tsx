import React from "react";

function SmallreplyCard({ children }: { children: React.JSX.Element }) {
  //!ADD GSAP ANIMATION
  return (
    <section className=" bg-bg_primary border shadow-lg rounded-t-xl sm:hidden absolute bottom-0 w-screen pb-4 max-h-[75%] flex flex-col gap-2 ">
      <header className="w-full p-2 flex flex-col  border-0 border-b border-gray-300 justify-center items-center rounded-t-full gap-2">
        <span className="w-8 h-1 bg-gray-500 rounded-full"></span>
        <h4 className="uppercase font-semibold tracking-wide">reply</h4>
      </header>
      {children}
    </section>
  );
}

export default SmallreplyCard;