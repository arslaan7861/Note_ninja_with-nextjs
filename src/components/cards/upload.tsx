import { uploadType } from "@/types/types";
import React from "react";
import { BookIcon } from "../icons/notecard";
import Link from "next/link";

function Upload({ uploadData }: { uploadData: uploadType }) {
  return (
    <Link href={`/notes/${uploadData._id}`} className="note_card">
      <article className="h-full w-full bg-card_color flex flex-col rounded-md p-4 hover:scale-105 transition-all">
        <div className="w-full h-min flex gap-4">
          <BookIcon className="h-16 shrink-0 aspect-square text-white bg-primary_color rounded-md p-3" />
          <div className="flex-grow flex flex-col gap-1 text-gray-600 text-sm">
            <span className="line-clamp-1 break-all flex-1 font-semibold h-min text-black text-base">
              {uploadData.subject}
            </span>
            <p className="">
              <span className="capitalize">{uploadData.year} </span>
              year- unit {uploadData.unit || 1}
            </p>
            <p>
              uploaded by -{" "}
              <span className="text-black">@{uploadData.uploader}</span>
            </p>
            <p>uploaded at {uploadData.time || "Sat Sep 28 2023"}</p>
          </div>
        </div>
        <div></div>
      </article>
    </Link>
  );
}

export default Upload;
