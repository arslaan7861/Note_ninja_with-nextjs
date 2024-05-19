import { uploadType } from "@/types/uploads";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Upload({ uploadData }: { uploadData: uploadType }) {
  return (
    <Link
      href={`/notes/${uploadData._id}`}
      className=" shrink-0 h-32 text-txtclr relative overflow-hidden z-10 flex items-center gap-2 col-span-1 rounded-md hover:bg-transBlack bg-card_color text-text_color shadow-md"
    >
      <section className="relative w-24 h-full shrink-0">
        <Image src={"/images/book.jpg"} fill alt="book cover page" />
      </section>
      <section className="flex-grow flex flex-col py-4 p-2 justify-center gap-2 ">
        <h4 className=" font-bold uppercase">unit 1</h4>
        <h5 className="text-ellipsis capitalize w-full font-semibold  line-clamp-1">
          {uploadData.subject}
        </h5>
        <h5 className="text-ellipsis capitalize text-sm w-full font-semibold  line-clamp-1">
          {uploadData.year} year
        </h5>
        <h6 className="text-ellipsis text-secondary_text break-all font-semibold w-full  line-clamp-1">
          uploaded: {uploadData.uploader}
        </h6>
      </section>
    </Link>
  );
}

export default Upload;
