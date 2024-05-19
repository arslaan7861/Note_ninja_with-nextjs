import React from "react";
import Image from "next/image";
import connectDB from "@/lib/DB/connectDB";
import noteSchema from "@/lib/DB/noteSchema";
import { uploadType } from "@/types/uploads";

type propsType = {
  params: {
    noteId: string;
  };
};

async function InterceptedNote({ params }: propsType) {
  await connectDB();
  const noteData: uploadType = await noteSchema.findById(params.noteId);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 font-semibold pt-4">
      <section className="relative w-32 h-40">
        <Image src={"/images/book.jpg"} fill alt="book cover page" />
      </section>
      <section className="w-full flex flex-col px-4 justify-evenly gap-2 flex-grow">
        <h5 className="flex justify-between gap-3 capitalize text-ellipsis line-clamp-1">
          <span> unit:</span>
          <span className="break-all line-clamp-1"> unit 1</span>
        </h5>
        <h5 className="flex justify-between gap-3 capitalize ">
          <span> subject:</span>
          <span className=" text-right break-all line-clamp-1">
            {" "}
            {noteData.subject}
          </span>
        </h5>
        <h5 className="flex justify-between capitalize">
          <span> year:</span>
          <span> {noteData.year}</span>
        </h5>
        <h5 className="flex justify-between ">
          <span> Uploaded by :</span>
          <span className=""> {noteData.uploader}</span>
        </h5>
        <a
          href={noteData.webContentLink}
          className="bg-primary_color hover:bg-secondary_color self-center mt-2 text-white px-4 py-2 text-base text-center uppercase font-secondary"
        >
          download
        </a>
      </section>
    </div>
  );
}

export default InterceptedNote;
