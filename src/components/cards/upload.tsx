import { uploadType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadBtn } from "../icons/notecard";

function Upload({ uploadData }: { uploadData: uploadType }) {
  return (
    <article className="bg-card_color shadow-lg rounded-lg overflow-clip">
      <div className="md:flex relative">
        <section className="absolute h-full w-full peer ">
          <Image fill alt="note cover" src={"/images/book.jpg"}></Image>
        </section>
        <section className="p-8 peer-hover:translate-y-0 hover:translate-y-0 transition-transform hover:backdrop-blur-md peer-hover:backdrop-blur-md">
          <h4 className="mt-2 font-bold leading-6 text-gray-900 text-ellipsis line-clamp-2">
            {uploadData.subject}
          </h4>
          <p className="uppercase tracking-wide text-sm text-black font-semibold mt-2">
            Unit {2}
          </p>
          <div className="mt-2 flex items-center text-gray-600">
            <span>{"Third year"}</span>
          </div>
          <div className="mt-2 flex items-center text-gray-600">
            {/* <User className="h-5 w-5 mr-2" /> */}
            <span>Uploaded by @{uploadData.uploader}</span>
          </div>
          <div className="mt-4">
            <button className="btn_primary flex text-base h-10 gap-2">
              <DownloadBtn />
              Download notes{" "}
            </button>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Upload;
