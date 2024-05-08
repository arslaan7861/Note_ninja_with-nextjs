import { uploadType } from "@/types/uploads";
import Image from "next/image";
import React from "react";

function Upload({ uploadData }: { uploadData: uploadType }) {
  return (
    <article className=" shrink-0 h-32 text-txtclr relative overflow-hidden z-10 flex items-center gap-2 col-span-1 rounded-md shadow-md border border-black ">
      <section className="relative w-24 h-full shrink-0">
        <Image src={"/images/book.jpg"} fill alt="book cover page" />
      </section>
      <section className="flex-grow flex flex-col py-4 p-2 justify-center gap-2 ">
        <h2 className="text-base font-extrabold uppercase">unit 1</h2>
        <h3 className="text-ellipsis capitalize text-sm w-full font-semibold  line-clamp-1">
          {uploadData.subject}
        </h3>
        <h3 className="text-ellipsis capitalize text-sm w-full font-semibold  line-clamp-1">
          {uploadData.year} year
        </h3>
        <h3 className="text-ellipsis text-xs font-semibold w-full  line-clamp-1">
          uploaded: {uploadData.uploader}
        </h3>
      </section>
    </article>
  );
}

export default Upload;
