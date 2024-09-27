import connectDB from "@/lib/DB/connectDB";
import noteSchema from "@/lib/DB/noteSchema";
import { uploadType } from "@/types/types";
import Image from "next/image";
import React from "react";
type propsType = {
  params: {
    noteId: string;
  };
};

async function page({ params }: propsType) {
  await connectDB();
  const note: uploadType = await noteSchema.findById(params.noteId);

  return (
    <main className="h-min border border-red-100 pt-4 sm:pt-0 md:h-72 bg-card_color  relative overflow-hidden z-10 text-text_color flex-col sm:flex-row flex items-center gap-2 col-span-3 row-span-1 rounded-md hover:bg-transBlack shadow-md">
      <section className="relative md:h-full h-56 aspect-[2/3] shrink-0">
        <Image src={"/images/book.jpg"} fill alt="book cover page" />
      </section>
      <section className="flex-grow flex flex-col py-4 p-2 items-center sm:items-start justify-center text-center sm:text-left gap-2 ">
        <h3 className=" font-bold uppercase ">unit 1</h3>
        <h5 className="text-ellipsis capitalize w-full font-semibold  line-clamp-1">
          {note.subject}
        </h5>
        <h5 className="text-ellipsis capitalize w-full font-semibold  line-clamp-1">
          {note.year} year
        </h5>
        <h5 className="text-ellipsis text-secondary_text break-all font-semibold w-full  line-clamp-1">
          uploaded: {note.uploader}
        </h5>
        <a
          href={note.webContentLink}
          className="bg-primary_color hover:bg-secondary_color mt-2 text-white px-4 py-2 text-base text-center uppercase font-secondar w-full sm:w-min"
        >
          download
        </a>
      </section>
    </main>
  );
}

export default page;
