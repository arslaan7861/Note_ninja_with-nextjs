import React from "react";

function Loading() {
  return (
    <div className="w-full h-full flex p-4 flex-col items-center justify-center gap-5 font-semibold pt-4">
      <section className="relative w-32 h-40 bg-gray-400"></section>
      <section className="w-full flex flex-col px-4 justify-evenly gap-2 flex-grow">
        <h2 className="flex justify-between text-gray-400 gap-3 capitalize text-ellipsis line-clamp-1">
          <span className="bg-gray-400 rounded"> unit:</span>
          <span className="bg-gray-400 rounded"> unit:</span>
        </h2>
        <h3 className="flex justify-between gap-3 capitaliz text-gray-400">
          <span className="bg-gray-400 rounded"> subject:</span>
          <span className="bg-gray-400 rounded">subject</span>
        </h3>
        <h3 className="flex justify-between capitaliz text-gray-400">
          <span className="bg-gray-400 rounded"> year:</span>
          <span className="bg-gray-400 rounded">year</span>
        </h3>
        <h3 className="flex justify-between text-gray-400">
          <span className="bg-gray-400 rounded"> Uploaded by :</span>
          <span className="bg-gray-400 rounded">arslaan</span>
        </h3>
        <a
          href="#"
          target="_blank"
          className=" self-center text-gray-400 px-4 py-2 text-lg text-center uppercase"
        >
          download
        </a>
      </section>
    </div>
  );
}

export default Loading;
